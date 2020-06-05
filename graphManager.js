import svgPanZoom from "svg-pan-zoom";
import * as d3 from "d3";
import dagreD3 from "dagre-d3";
import { createPopper } from '@popperjs/core';
import tippy from "tippy.js";

function getSpanId(span){
    return span["span.id"]+span["span.name"]+span["transaction.id"];
}

function getServiceId(span) {
    return span["service.name"];
}

function copyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
  
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
       document.execCommand('copy');
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  
    document.body.removeChild(textArea);
}


/**
 * Renders the Directed Acyclic Graph for the experiment.
 */
export default class D3GraphManager {
    constructor(anchorNode, dataNodes, depNodes, gType, onTraceIdClick, onGraphLoaded=()=>{}) {
        this.anchorNode = anchorNode;
        this.dataNodes = dataNodes;
        this.depNodes = depNodes;
        this.gType = gType;
        this.svgId = "svg_" + ("" + Math.random()).slice(2);
        this.isRunning = false;
        this.onTraceIdClick = onTraceIdClick;
        this.traceColors = {}
        this.onGraphLoaded = onGraphLoaded
        this.initTraceListModal();
    }

    initTraceListModal = ()=>{
        if(document.getElementById("myModal")) return;

        let div = document.createElement("div");
        div.innerHTML = `
            <div id="myModal" class="modal">

                <!-- Modal content -->
                <div class="modal-content">
                    <div class="modal-header">
                        <h2 id="traces-list-title" style="display:inline-block; margin-top:5px">Traces</h2>
                        <span class="close-btn">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="item-traces-list" id="myModalContent"></div>
                    </div>
                </div>

            </div>
        `
        document.body.appendChild(div);
    }

    setTraceColors = (traceColors={})=>{
        this.traceColors = traceColors
    }

    /**
     * Generates a visual representation of a node (component including it's selected hosts)
     */
    getSVGNodeView = (item) => {
        let nodeContainer = document.createElementNS("http://www.w3.org/2000/svg", "g");

        let compNameNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        
        compNameNode.setAttribute("x", 15);
        compNameNode.setAttribute("y", 15);
        compNameNode.style = "fill:#0d47a1; font-size:14px; font-weight:bold;";
        let name = item["span.name"]? item["span.name"] : item["service.name"];
        compNameNode.textContent = name+ "\u2003".repeat(2);


        let transIdNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        transIdNode.setAttribute("x", 15);
        transIdNode.setAttribute("y", 40);
        transIdNode.style = "fill:#0d47a1; font-size:14px;";
        transIdNode.textContent = "transId: " + item["transaction.id"]+ "\u2003".repeat(2);


        let spanIdNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        spanIdNode.setAttribute("x", 15);
        spanIdNode.setAttribute("y", 58);
        spanIdNode.style = "fill:#0d47a1; font-size:14px;";
        spanIdNode.textContent = "spanId: " + item["span.id"]+ "\u2003".repeat(2);


        let parentIdNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        parentIdNode.setAttribute("x", 15);
        parentIdNode.setAttribute("y", 76);
        parentIdNode.style = "fill:#0d47a1; font-size:14px;";
        parentIdNode.textContent = "parentId: " + item["parent.id"]+ "\u2003".repeat(2);
        
        nodeContainer.append(compNameNode, transIdNode, spanIdNode, parentIdNode);

        return nodeContainer;
    };

    getSimpleSVGNode = (item)=>{
        let traces = [...new Set(item.traces||[])];
        let nodeContainer = document.createElementNS("http://www.w3.org/2000/svg", "g");

        let compNameNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        
        compNameNode.setAttribute("x", 10);
        compNameNode.setAttribute("y", -25);
        compNameNode.style = `fill:${item["node.color"]?item["node.color"]:"#0d47a1"} !important; font-size:20px; font-weight:bold;`;
        let name = item["service.name"];
        compNameNode.textContent = name//+ "\u2003".repeat(2);
        

        let traceCountNode = document.createElementNS("http://www.w3.org/2000/svg", "text");
        const traceCount = traces.length;

        traceCountNode.setAttribute("x", 4.75*item["name-length-max"] - 5*item["name-diff-length"] - ((""+traceCount).length-1)*8);
        traceCountNode.setAttribute("y", 65);
        traceCountNode.style = "fill:whitesmoke !important; font-size:30px;";
        traceCountNode.textContent = (" ".repeat(name.length/2))+traceCount+(" ".repeat(name.length/2))//+ "\u2003".repeat(2);

        
        nodeContainer.append(compNameNode, traceCountNode);
        return nodeContainer;
    }

    arrangeNodeTextsToFixLength = ()=>{
        let longestText = "";
        for(let node of this.dataNodes){
            if(node["service.name"].length>longestText.length){
                longestText = node["service.name"];
            }
        }
        this.dataNodes = this.dataNodes.map(node=>{
            let text = node["service.name"];
            let diffLength = longestText.length - text.length;
            // text = (" ".repeat(diffLength/2))+text+(" ".repeat(diffLength/2));
            // node["service.name.fixed"] = text;
            node["name-diff-length"] = diffLength;
            node["name-length-max"] = longestText.length;
            return node;
        })
    }

    /**
     * Manages the creation of a new Dagre-D3 instance, nodes and edges.
     */
    processDagre = () => {
        if(this.gType == "ANALYZER"){ this.arrangeNodeTextsToFixLength() }

        this.dagre = new dagreD3.graphlib.Graph({ compound: true })
            .setGraph({ rankdir: this.gType=="ANALYZER"? "LR" : "BT", marginy: 80 })
            .setDefaultEdgeLabel(function() {
                return {};
            });

        this.dataNodes.forEach(item => {
            let traces = [...new Set((item.traces||[]).filter(t=>t.length>2).map(t=>t+"-->"+this.traceColors[t]))];
            // traces = [...traces, ...Array(313000).fill(0).map(t=>(""+Math.random()).substring(2))];
            
            // let dataNodeId = "--data-node-"+getServiceId(item);
            // let dn = document.getElementById(dataNodeId);
            // if(!dn){
            //     dn = document.createElement("div");
            //     dn.id = dataNodeId
            //     this.anchorNode.appendChild(dn);
            // }
            // dn.style.display="none";
            // dn.textContent = traces.join(";");

            if(this.gType == "ANALYZER"){
                let fillColor = item["node.color"];
                this.dagre.setNode(getServiceId(item), {
                    labelType: "svg",
                    shape: "circle",
                    style: `fill: ${fillColor?fillColor:"#0d47a1"} !important`,
                    width: 200,
                    height:200,
                    label:  this.getSimpleSVGNode(item),//"circle",
                    // label:  item["service.name"]+"("+item.traces.length+")",
                    class: (item.traces?"["+traces.join(";")+"] ":"") + 
                            ("analyzer-node ") + 
                            (item.isSource? "source-node" : item.isTarget? "target-node" : "")
                });
            } else {
                this.dagre.setNode(getSpanId(item), {
                    labelType: "svg",
                    label: this.getSVGNodeView(item),
                    class: (item.traces?"["+item.traces.join(";")+"] ":"") + 
                            (item.isSource? "source-node" : item.isTarget? "target-node" : "")
                });
            }
        });
        this.depNodes.forEach(item => {
            if(this.gType == "ANALYZER"){
                this.dagre.setEdge(getServiceId( item.source ), getServiceId( item.target ), { curve: d3.curveBasis, class: item.isResultLink?"result-link":"" /*, class: "animation animation-medium density-high weight-medium" */});
            } else {
                this.dagre.setEdge(getSpanId( item.source ), getSpanId( item.target ), { curve: d3.curveBasis, class: item.isResultLink?"result-link":"" /*, class: "animation animation-medium density-high weight-medium" */});
            }
        });
    };

    /**
     * Sets up d3 and renders the configured graph
     */
    drawGraph = (hideSpans) => {
        this.processDagre(hideSpans);
        let render = new dagreD3.render();

        this.svgRoot = d3
            .select(this.anchorNode)
            .append("svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("id", this.svgId);

        let svgContainer = this.svgRoot
            .append("g")
            .attr("class", "main_graph")
            .attr("width", "100%")
            .attr("height", "100%");

        render(d3.select(`svg#${this.svgId}`).select("g.main_graph"), this.dagre);

        this.panZoomTrigger = svgPanZoom("#" + this.svgId, { controlIconsEnabled: true, maxZoom: 5 });
        this.panZoomTrigger.center().zoom( this.depNodes.length < 3? 0.3 : this.depNodes.length < 5 ? 0.6 : 0.7);
        
        this.onGraphLoaded();
        
        setTimeout(() => {
            document.querySelectorAll("g.node rect.label-container").forEach(item => {
                if(this.gType != "ANALYZER"){
                    item.setAttribute("rx", "5" );
                    item.setAttribute("ry", "5" );
                }
            });
            document.querySelectorAll("g.node circle.label-container").forEach(item => {
                    item.setAttribute("r", "75" );
            });
            document.querySelectorAll("g.node.analyzer-node").forEach(item => {
                let tracesStr = [...item.classList].find(t=>t.startsWith("[")&&t.endsWith("]")) || "";
                tracesStr = tracesStr.replace(/\[|\]/g, ""); // remove [ and ]

                // tracesStr = document.getElementById(tracesStr).textContent;
                let traces = (tracesStr||"").trim().split(";").map(t=>t.split("-->"));
                // tippy(item, {
                //     content:`<div class="item-traces-list">
                //     <!--<div class="traces-title">complaintsservice traces</div>-->
                //     ${traces.map(trace=>(`
                //         <div class="traces-item" style="color:${trace[1]}">
                //             <div class="trace-id" data-trace="${trace[0]}">${trace[0]}</div>
                //             <div class="copy-item" data-trace="${trace[0]}">COPY</div>
                //         </div>
                //     `)).join("")}
                // </div>`,  //trace[0] is the trace id while trace[1] is the color
                //     theme: "light-border",
                //     trigger: "click",
                //     allowHTML: true,
                //     interactive: true,
                //     appendTo: this.anchorNode
                // });
                item.onclick = ()=>{
                    if(!traces.length || traces.length == 1 && !traces[0][0].length) return;
                    let modal = document.getElementById("myModal");
                    modal.style.display = "block";

                    let modalContent = document.getElementById("myModalContent");
                    modalContent.innerHTML = traces.map(trace=>(`
                        <div class="traces-item" style="color:${trace[1]}">
                            <div class="trace-id" data-trace="${trace[0]}">${trace[0]}</div>
                            <div class="copy-item" data-trace="${trace[0]}">COPY</div>
                        </div>
                    `)).join("");
                    
                    function removeModal(){
                        modal.style.display = "none";
                        window.removeEventListener("click", removeModal)
                        let span = document.getElementsByClassName("close-btn")[0];
                        span.removeEventListener("click", removeModal)
                    }
                    // window.addEventListener("click", removeModal);
                    let span = document.getElementsByClassName("close-btn")[0];
                    span.addEventListener("click", removeModal)
                }
            });
            document.body.onclick = (evt)=>{
                if(evt.target && evt.target.className == "trace-id"){
                    let traceId = evt.target.getAttribute("data-trace");
                    this.onTraceIdClick(traceId);
                }
                else if(evt.target && evt.target.className == "copy-item"){
                    let traceId = evt.target.getAttribute("data-trace");
                    copyTextToClipboard(traceId);
                }
            }
        }, 500);
    };
}
