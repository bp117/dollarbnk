import React, { useState, useEffect } from 'react'
import { FlexBlock, Block } from '../utils';
import { EuiSuggest } from '@elastic/eui';
import { EuiFieldText, EuiSuperDatePicker, EuiLoadingChart } from '@elastic/eui';
import { EuiButton, EuiPopover, EuiCheckbox } from '@elastic/eui';
import { EuiIcon, EuiOverlayMask, EuiConfirmModal } from '@elastic/eui';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from "../../actions/index";
import moment from "moment";
import { UNIQUE_COLORS } from '../../constants/colors';
import { displayImpactGraph, displayBacktraceGraph } from './graphDisplayType';


function mapStateToProps(state){
    return {
        rawData: state.err_data.data,
        indices: state.es_indices.data
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

function _getCompactName(err){
    if(!err.includes(".")) return err;

    let parts = err.split(".");
    let lastPart = parts.splice(parts.length-1, 1)[0];
    
    return parts.map(part=>{
        let firstLetter = part[0];
        if(firstLetter == firstLetter.toLowerCase()){
            firstLetter+= (part[1]||"")
        }
        let allLetters = part.substring(1).split("");
        let othersCondensed = allLetters.filter(t=>t===t.toUpperCase()).join("");
        return firstLetter+""+othersCondensed;
    }).join(".")+"."+lastPart;
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

const PlaceholderView = ({title, text})=>(
    <Block matchParent>
        <FlexBlock alignCenter justifyCenter matchParent column>
            <h2 style={{fontSize:18, fontWeight:"bold"}}>{title}</h2>
            <h4 style={{color:"#1565C0", marginTop:10}}>{text}</h4>
        </FlexBlock>
    </Block>
)

const DisplayErrorView = ({errorText})=>(
    <Block matchParent>
        <FlexBlock alignCenter justifyCenter matchParent column>
            <EuiIcon type="faceSad" color="#BF360C" size="xl"/>
            <h2 style={{fontSize:30, fontWeight:"bold", color:"#BF360C"}}>Oops!</h2>
            <h4 style={{color:"#1565C0", marginTop:10}}>{errorText}</h4>
        </FlexBlock>
    </Block>
)

const CompactName = ({text, arrowColor, style, ...restProps})=>{
    const [showCompactName, setShowCompactName] = useState(true)
    return (
        <span {...restProps} style={{cursor:"default", ...style}} onClick={(e)=>{e.stopPropagation(); setShowCompactName(!showCompactName)}}>
            {showCompactName? _getCompactName(text) : text}
            <span style={{cursor:"pointer", marginLeft:3}}>
                {<EuiIcon type={showCompactName?"sortRight" : "sortLeft"} size="m" color={arrowColor || "#0D47A1"}/>}
            </span>
        </span>
    )
}

const InputFilters = ({
    suggestions, 
    index, 
    startDatetime, 
    endDatetime, 
    onIndexChange, 
    onServiceNameChange, 
    onErrorTypeChange, 
    onDatetimeChange, 
    onSearch
})=>(
    <FlexBlock alignCenter>
        <div style={{marginRight:20, flex:1, maxWidth:400}}>
            <EuiSuggest
                suggestions={suggestions} 
                value={index}
                onItemClick={(item)=>{ onIndexChange(item.label); }}
                placeholder="Index (required)" 
                onInputChange={(e)=>{
                    onIndexChange( e.value );
                }}/>
        </div>
        <div style={{marginRight:20, flex:1, maxWidth:400}}>
            <EuiFieldText
                placeholder="Service Name"
                onChange={(e)=>{
                    onServiceNameChange( e.target.value )
                }}/>
        </div>
        <div style={{marginRight:20, flex:1, maxWidth:400}}>
            <EuiFieldText
                placeholder="Error Type"
                onChange={(e)=>{
                    onErrorTypeChange( e.target.value )
                }}/>
        </div>
        <div style={{marginRight:20, flex:1, maxWidth:450}}>
            <EuiSuperDatePicker 
                isCustom={false}
                onTimeChange={(p)=>onDatetimeChange(p.start, p.end)}
                end={endDatetime}
                start={startDatetime}
                adjustDateOnChange={true}
                showTimeSelect={true}
                dateFormat="MMM D, YYYY @ HH:mm"
                showUpdateButton={false} />
        </div>
        <EuiButton onClick={onSearch}> Search </EuiButton>
    </FlexBlock>
)

const ErrorTypeListItem = ({errorText, errorCount, isSelected, errorTraces, traceColors, onSelectErrorType})=>{
    return (
        <div>
            <div 
                className={`--list-item ${isSelected?"active":""}`} 
                onClick={onSelectErrorType} 
                style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <span style={{wordWrap:"break-word", wordBreak:"break-all"}}>{errorText}</span>
                    <span style={{display:"inline-block"}}>
                        <span className="badge">{errorCount}</span>
                    </span>
            </div>
        </div>
    )
}

export const CopyIcon = ({text})=>(
    <span className="--copy-icon" onClick={()=>copyTextToClipboard(text)}>
        <EuiIcon type="copy" />
    </span>
)

const ServiceCard = ({name, totalCount, traceColors, currentView, analyticsData, onDisplayImpactGraph, onDisplayBactraceGraph, getErrorTraceList})=>{
    let analyticsDataKeys = Object.keys(analyticsData);
    const [openPopover, setOpenPopover] = useState(false);
    const [selectedErrors, setSelectedErrors] = useState(analyticsDataKeys)

    return (
        <div>
            <div className="service-card">
                <div className="service-name" style={{display:"flex", justifyContent:"space-between"}}>
                    <span style={{wordWrap:"break-word", wordBreak:"break-all"}}>
                        <CopyIcon text={name}/>
                        {currentView !== "SERVICE_VIEW"? <CompactName text={name} arrowColor="#42A5F5" /> : name}
                    </span>
                    <span style={{fontWeight:"bold", fontSize:12, color:"#CFD8DC"}}>{totalCount}</span>
                </div>
                {currentView === "SERVICE_VIEW" &&
                    <div className={"card-actions "+(!!selectedErrors.length?"show-actions":"")}>
                        <EuiButton size="s" color="ghost" fullWidth={false} style={{fontSize:12}} onClick={()=>onDisplayImpactGraph(name,selectedErrors)}>IMPACT GRAPH</EuiButton>
                        <EuiPopover ownFocus
                            isOpen={openPopover} closePopover={()=>setOpenPopover(false)}
                            button={<EuiButton 
                                        size="s" 
                                        color="ghost" 
                                        fullWidth={false} 
                                        style={{fontSize:12}} 
                                        onClick={()=>setOpenPopover(true)}>B-GRAPH</EuiButton>}
                        >
                            <div className="--list md" style={{maxHeight:450, overflowY:"auto"}}>
                                <div className="--list-heading">Error Traces</div>
                                {(getErrorTraceList(name, selectedErrors)||[]).map(item=>(
                                    <div className="--list-item" onClick={()=>onDisplayBactraceGraph(name, item)} style={{color:traceColors[item]}}>{item}</div>
                                ))}
                            </div>
                        </EuiPopover>
                    </div>
                }
                <div className="error-count" style={{maxHeight:250, overflowY:"auto"}}>
                    {currentView == "SERVICE_VIEW" && analyticsDataKeys.length>1 &&
                    <div style={{width:"100%", display:"flex", alignItems:"flex-start", justifyContent:"flex-start", textAlign:"left"}}>
                        <div style={{display:"inline-block"}}>
                            <EuiCheckbox 
                                id={"ALL"+""+Math.random()+name}
                                checked={selectedErrors.length>0 && selectedErrors.length == analyticsDataKeys.length}
                                indeterminate={selectedErrors.length>0 && selectedErrors.length != analyticsDataKeys.length}
                                // label={item}
                                label={<span style={{color:"#0D47A1"}}>SELECT ALL</span>}
                                style={{fontSize:12}}
                                onChange={(e)=>{setSelectedErrors(e.target.checked?[...analyticsDataKeys] : [])}} />
                        </div>
                    </div>
                    }
                    {analyticsDataKeys.map(item=>(
                        <div style={{padding:"5px 0", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            {currentView != "SERVICE_VIEW"?
                                <span style={{color:traceColors[item], fontSize:traceColors[item]?13:14}}>{item}</span>
                                :
                                <EuiCheckbox 
                                    id={item+""+Math.random()+name}
                                    checked={selectedErrors.includes(item)}
                                    // label={item}
                                    label={<CompactName text={item} />}
                                    style={{fontSize:12, color:currentView=="TRACE_VIEW"?traceColors[item]:undefined}}
                                    onChange={(e)=>{setSelectedErrors(e.target.checked?[...selectedErrors, item] : selectedErrors.filter(t=>t!==item))}} />

                            }
                            <div style={{display:"flex", alignItems:"center"}}>
                                <div style={{marginRight:10, fontSize:12, fontWeight:"bold", color:"#880E4F"}}>{analyticsData[item]}</div>
                                <CopyIcon text={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const ServicesContentPanel = ({affectedServices, errorTypeData, analyticsViewData, selectedErrorType, traceColors, currentView, onDisplayBactraceGraph, onDisplayImpactGraph, getErrorTraceList})=>(
    affectedServices ? 
    <FlexBlock wrap justifyCenter style={{alignItems:"flex-start", width:"100%"}}>
        { currentView == "EXCEPTION_VIEW"?
            Object.keys(analyticsViewData).map((errType,ind)=>(
                <ServiceCard 
                    key={errType+""+ind}
                    name={errType}
                    totalCount={analyticsViewData[errType].servicesCount}
                    analyticsData={analyticsViewData[errType].services}
                    onDisplayBactraceGraph={onDisplayBactraceGraph}
                    onDisplayImpactGraph={onDisplayImpactGraph}
                    getErrorTraceList={getErrorTraceList}
                    errorType={selectedErrorType}
                    traceColors={traceColors}
                    currentView={currentView}
                />
            ))
            :
            currentView == "TRACE_VIEW"?
            Object.keys(analyticsViewData).map((errType,ind)=>(
                <ServiceCard 
                    key={errType+""+ind}
                    name={errType}
                    totalCount={analyticsViewData[errType].tracesCount}
                    analyticsData={analyticsViewData[errType].traces}
                    onDisplayBactraceGraph={onDisplayBactraceGraph}
                    onDisplayImpactGraph={onDisplayImpactGraph}
                    getErrorTraceList={getErrorTraceList}
                    errorType={selectedErrorType}
                    traceColors={traceColors}
                    currentView={currentView}
                />
            ))
            :
            Object.keys(affectedServices).map((service,ind)=>(
                <ServiceCard 
                    key={service+""+ind}
                    name={service}
                    totalCount={affectedServices[service].errorsCount}
                    analyticsData={affectedServices[service].errors}
                    onDisplayBactraceGraph={onDisplayBactraceGraph}
                    onDisplayImpactGraph={onDisplayImpactGraph}
                    getErrorTraceList={getErrorTraceList}
                    errorType={selectedErrorType}
                    traceColors={traceColors}
                    currentView={currentView}
                />
            ))
        }
    </FlexBlock>
    :
    <PlaceholderView  title="Nothing to process!"  text="Select an error type to view all affected services" />
)

const GraphContentPanel = ({errorLevel2, selectedErrorType, selectedErrorTrace, graphViewRef, loadingGraph})=>(
    errorLevel2 ? <DisplayErrorView errorText={errorLevel2}/>
    :
    (selectedErrorType || selectedErrorTrace)? (
        <React.Fragment>
            {loadingGraph && <div style={{position:"absolute", top:0, left:0, bottom:0, right:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}><Loader text="Loading Graph..." /></div>}
            <div style={{width:"100%", flex:1}} ref={graphViewRef} />
        </React.Fragment>
    )
    :
    <PlaceholderView  title="Nothing to process!"  text="Select an error type to view all affected services" />
)

const ErrorSidebarList = ({qErrorType, errorTypeData, currentView, getErrorTraces, selectedErrorType, traceColors, onSelectErrorType, onSelectAllExceptions, onSelectExceptionsView, onSelectServiceView, onSelectTracesView})=>(
    <div className="--list md" style={{width:170}}>
        <div className="--list-heading" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>All Errors <span style={{fontSize:12}} className="--badge">{Object.keys(errorTypeData).reduce((count,item)=>count+errorTypeData[item].length, 0)}</span></div>
        <div style={{marginTop:10}} className="--list-body">
            <div className="--list-body-content">
                {/* {!qErrorType &&
                    <div 
                        className={"--list-item "+(selectedErrorType=="ALL_EXCEPTIONS"?"active":"")} 
                        style={{color:"#0D47A1", marginBottom:20,display:"flex", justifyContent:"space-between", alignItems:"center"}}
                        onClick={onSelectAllExceptions}
                    >
                        <span>ALL EXCEPTIONS</span>
                        <span className="badge">{Object.keys(errorTypeData).reduce((count,item)=>count+errorTypeData[item].length, 0)}</span>    
                    </div>
                } */}
                <div 
                    className={"--list-item "+(currentView=="SERVICE_VIEW"?"active":"")} 
                    style={{color:"#0D47A1", marginBottom:20,display:"flex", justifyContent:"space-between", alignItems:"center"}}
                    onClick={onSelectServiceView}
                >
                    SERVICE VIEW 
                </div>
                <div 
                    className={"--list-item "+(currentView=="EXCEPTION_VIEW"?"active":"")} 
                    style={{color:"#0D47A1", marginBottom:20,display:"flex", justifyContent:"space-between", alignItems:"center"}}
                    onClick={onSelectExceptionsView}
                >
                    EXCEPTION VIEW
                </div>
                <div 
                    className={"--list-item "+(currentView=="TRACE_VIEW"?"active":"")} 
                    style={{color:"#0D47A1", marginBottom:20,display:"flex", justifyContent:"space-between", alignItems:"center"}}
                    onClick={onSelectTracesView}
                >
                    TRACE VIEW 
                </div>
                {/* {Object.keys(errorTypeData).map(item=>(
                    <ErrorTypeListItem 
                        errorText = {item}
                        errorCount = {errorTypeData[item].length}
                        errorTraces= {getErrorTraces(item)}
                        isSelected={selectedErrorType==item}
                        traceColors={traceColors}
                        onSelectErrorType={()=>onSelectErrorType(item)}
                    />
                ))} */}
            </div>
        </div>
    </div>
)

const Loader = ({text})=>(
    <React.Fragment>
        <EuiLoadingChart size="xl" />
        <div style={{marginTop:10, color:"#E65100"}}>{text}</div>
    </React.Fragment>
)

class ErrorTypeView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            index: "",
            serviceName: "",
            startDatetime: moment().toISOString(),
            endDatetime: moment().toISOString(),
            errorType: "",
            error: "",
            currentView: "SERVICE_VIEW"
            // ...this._processData(props.rawData)
        }
        this.backtraceViewRef = React.createRef();
    }
    _filterIndexAutoComplete = ()=>{
        let text = this.state.index;
        let d = this.props.indices.filter(t=>!text || t.toLowerCase().startsWith(text.toLowerCase()));
        return d.map(t=>({label:t, description:"", type:{iconType:"search", color:"tint8"}}));
    }
    _processData = (data={})=>{
        let traces = {}, absData=[], traceColors = {}, errorTypeData={};
        const {serviceName, errorType} = this.state;
        if(data.hits){
            absData = data.hits.hits.map(t=>({...t._source}));
            absData.forEach(d=>{
                traces[ d["trace.id"] ] = [ ...( traces[ d["trace.id"] ]  ||  [] ), d];
                if(d["error"] && Array.isArray( d["error"]["exception"] )){
                    d["error"]["exception"].forEach(err=>{
                        if(err.type && (!serviceName || d["service.name"]==serviceName) && (!errorType || new RegExp(errorType).test(err.type))){
                            errorTypeData[err.type] = [ ...(errorTypeData[err.type] || []), d ];
                        }
                    })
                }
            });
        }
        Object.keys(traces).forEach((traceId, ind)=>{
            traceColors[traceId] = UNIQUE_COLORS[ind];
        });
        console.log("PROCESSED --> ", {traces, data: absData, errorTypeData, traceColors})
        return {traces, data: absData, errorTypeData, traceColors};
    }
    
    _aggregateFieldFromErrData = (errorType, field, filterPredicate=(e)=>true)=>{
        let allFieldIds = (this.state.errorTypeData[errorType] || []).filter(filterPredicate).map(t=>t[field]);
        //let uniqueTraceIds = [...new Set(allTraceIds)].filter(t=>!!t);
        let uniqueFieldIds = {};
        allFieldIds.forEach(traceId=>{
            uniqueFieldIds[traceId] = uniqueFieldIds[traceId]?uniqueFieldIds[traceId]:{count:0} //(uniqueFieldIds[traceId] || 0) + 1;
            uniqueFieldIds[traceId].count ++;
        });

        return uniqueFieldIds;
    }

    handleFetchData = ()=>{
        if(!this.state.index){
            return this.setState({validationError: "Please provide an index for the operation"});
        }
        if(!this.state.startDatetime || !this.state.endDatetime){
            return this.setState({validationError: "Please provide a valid date-time range"});
        }
        this.setState({error:null, loadingData:true}, ()=>{
            const {index, serviceName, errorType, startDatetime, endDatetime} = this.state;
            this.props.fetchAppErrorData(index, {from: startDatetime, to:endDatetime}, (success, err)=>{
                this.setState({loadingData:false});
                if(!success){
                    let errorMsg = (((err.error || {}).root_cause || [])[0] || {}).reason || "Unknown error";
                    this.setState({error: errorMsg});
                    console.log("ERROR ", err);
                } else {
                    console.log("DATA ", err);
                }
            });
        });
    }
    handleSelectErrorType =(errType)=>{
        let affectedServices = {};
        let analyticsViewData = {};
        const {errorTypeData, serviceName} = this.state;
        Object.keys(errorTypeData).filter(t=>errType=="ALL_EXCEPTIONS" || errType == t).forEach(errType=>{
            (errorTypeData[errType] || []).map(t=>{
                let serviceName = t["service.name"];
                let traceId = t["trace.id"];

                affectedServices[ serviceName ] = affectedServices[ serviceName ]? affectedServices[ serviceName ] : {errors:{}, traces: [], errorsCount:0};
                let sList = affectedServices[ serviceName ];
                sList.traces = [...new Set([...sList.traces, t["trace.id"]])];
                sList.errors[errType] = sList.errors[errType]? sList.errors[errType]+1 : 1; 
                sList.errorsCount++;

                //EXCEPTIONS and TRACES VIEW
                analyticsViewData[ errType ] = analyticsViewData[ errType ]?analyticsViewData[ errType ] : {services:{}, servicesCount:0, traces:{}, tracesCount:0};
                sList = analyticsViewData[ errType ];
                sList.services[ serviceName ] = sList.services[ serviceName ]? sList.services[ serviceName ]+1 : 1;
                sList.traces[ traceId ] = sList.traces[ traceId ]? sList.traces[ traceId ]+1 : 1;
                sList.servicesCount ++;
                sList.tracesCount ++;
            });
        });

        

        this.setState({selectedErrorType: errType, affectedServices, analyticsViewData, isGraphView: false});
    }
    // handleSelectErrorTrace = (errType, traceId)=>{
        
    //     errType = errType || this.state.selectedErrorType;
    //     traceId = traceId || this.state.selectedErrorTrace;

    //     if(errType && traceId){
    //         let affectedServices = {};
    //         const {serviceName} = this.state;
    //         if(this.state.serviceName){
    //             affectedServices = this._aggregateFieldFromErrData(errType, "service.name", e => e["trace.id"] == traceId && e["service.name"]==serviceName);
    //         } else {
    //             affectedServices = this._aggregateFieldFromErrData(errType, "service.name", e => e["trace.id"] == traceId);
    //         }
    //         this.setState({
    //             selectedErrorTrace: traceId, 
    //             selectedErrorType: errType, 
    //             affectedServices, 
    //             currentGraphTraceId: null,
    //             currentGraphServiceName: null,
    //             isGraphView:false 
    //         });
    //     }
    // }
    handleSelectAllExceptions = ()=>{
        this.handleSelectErrorType("ALL_EXCEPTIONS");
    }
    handleDisplayImpactGraph = (serviceName, selectedErrors=[])=>{
        const {traces, traceColors} = this.state;
        const onError = (err)=>{this.setState({errorLevel2:err})};
        const onGraphLoaded = ()=>this.setState({loadingGraph: false});
        const countNodePredicate = (node, traceId)=>{
            return selectedErrors.some(err=>{
                let services = this.state.errorTypeData[err] || [];
                return services.find(t=>t["trace.id"] == traceId)
            });
        }
        const onTraceIdSelected = (_traceId)=>{
            this.setState({currentGraphTraceId: _traceId, loadingGraph:true}, ()=>{
                displayBacktraceGraph(serviceName, _traceId, traces, traceColors, this.backtraceViewRef, onError, onGraphLoaded);
            })
        }

        this.setState({isGraphView:true, impactGraphServiceName: serviceName, selectedErrors, loadingGraph:true},()=>{
            displayImpactGraph(serviceName, traces, traceColors, this.backtraceViewRef, false, countNodePredicate, onError, onTraceIdSelected, onGraphLoaded);
        });
    }
    _getErrorTraceList = (serviceName, selectedErrors=[])=>{
        let traceIds = [];
        selectedErrors.forEach(err=>{
            let services = this.state.errorTypeData[err] || [];
            let thisTraces = services.filter(t=>t["service.name"]==serviceName).map(t=>t["trace.id"]);
            traceIds = [...thisTraces, ...traceIds]
        });

        return [...new Set(traceIds)];
    }
    handleDisplayBacktraceGraph = (serviceName, traceId)=>{
        const {traces, traceColors} = this.state;
        const onError = (err)=>{this.setState({errorLevel2:err})};
        const onGraphLoaded = ()=>this.setState({loadingGraph: false});

        this.setState({currentGraphTraceId: traceId, selectedErrorTrace: traceId, impactGraphServiceName:null, isGraphView:true, loadingGraph:true}, ()=>{
            displayBacktraceGraph(serviceName, traceId, traces, traceColors, this.backtraceViewRef, onError, onGraphLoaded);
        });
    }
    handleGraphBackAction = ()=>{
        if(this.state.currentGraphTraceId && this.state.impactGraphServiceName){ //Backtrace graph is in view, so move to impact analysis view
            this.setState({ currentGraphTraceId: null }, ()=>{
                this.handleDisplayImpactGraph(this.state.impactGraphServiceName, this.state.selectedErrors);  //Display impact graph
            })
        } 
        else if(this.state.selectedErrorType == "ALL_EXCEPTIONS"){
            this.handleSelectAllExceptions();
        }
        else {  // Impact analysis is in view
            // this.handleSelectErrorTrace(this.state.selectedErrorType, this.state.selectedErrorTrace)
            this.handleSelectErrorType(this.state.selectedErrorType);
        }
    }
    componentWillReceiveProps(props){
        this.setState({
            ...this._processData(props.rawData),
            selectedErrorType: this.state.selectedErrorType? this.state.selectedErrorType : "ALL_EXCEPTIONS"
        }, ()=>{
            if(this.state.selectedErrorType == "ALL_EXCEPTIONS"){
                this.handleSelectAllExceptions();
            } else {
                // this.handleSelectErrorTrace()
            }
            // this.handleTraceItemSelected(this.state.selectedErrorType)
        });
    }
    componentDidMount(){
        this.props.fetchAllIndices();
        //
    }
    render() {
        const {errorTypeData, errorType, selectedErrorType, selectedErrorTrace, isGraphView, affectedServices, errorLevel2} = this.state;
        return (
            <FlexBlock matchParent column>
                <Block>
                    <InputFilters 
                        suggestions={this._filterIndexAutoComplete()}
                        index={this.state.index}
                        startDatetime={this.state.startDatetime}
                        endDatetime={this.state.endDatetime}
                        onIndexChange={(index)=>this.setState({index})} 
                        onServiceNameChange={(serviceName)=>this.setState({serviceName})}
                        onErrorTypeChange={(errorType)=>this.setState({errorType})}
                        onDatetimeChange={(startDatetime, endDatetime)=>this.setState({startDatetime, endDatetime})}
                        onSearch={this.handleFetchData} 
                    />
                    <hr className="hr-divider"/>
                </Block>

                {this.state.loadingData?
                    <FlexBlock alignCenter justifyCenter matchParent column>
                        <Loader text="Loading Data..." />
                    </FlexBlock>
                 :
                 this.state.error? <DisplayErrorView errorText={this.state.error}/>
                :
                Object.keys(errorTypeData||{}).length?
                    <FlexBlock flexOne>
                        <ErrorSidebarList 
                            errorTypeData={errorTypeData}
                            getErrorTraces={(item)=>this._aggregateFieldFromErrData(item, "trace.id")}
                            selectedErrorType={selectedErrorType}
                            traceColors={this.state.traceColors}
                            onSelectErrorType={this.handleSelectErrorType}
                            onSelectAllExceptions={this.handleSelectAllExceptions}
                            onSelectServiceView={()=>this.setState({currentView:"SERVICE_VIEW"})}
                            onSelectExceptionsView={()=>this.setState({currentView:"EXCEPTION_VIEW"})}
                            onSelectTracesView={()=>this.setState({currentView:"TRACE_VIEW"})}
                            qErrorType={errorType}
                            currentView={this.state.currentView}
                        />
                        <FlexBlock flexOne matchParent column style={{position:"relative"}}>
                            {isGraphView &&
                                <div style={{position:"absolute", top:0, left:50}}>
                                    <EuiButton iconType="arrowLeft" size="s" fill onClick={this.handleGraphBackAction}> BACK </EuiButton>
                                </div>
                            }
                            {isGraphView ? 
                                (
                                    <GraphContentPanel 
                                        errorLevel2={errorLevel2}
                                        graphViewRef={this.backtraceViewRef}
                                        selectedErrorTrace={selectedErrorTrace}
                                        selectedErrorType={selectedErrorType}
                                        loadingGraph={this.state.loadingGraph}
                                    />
                                )  
                                : 
                                (
                                    <ServicesContentPanel 
                                        errorTypeData={errorTypeData}
                                        analyticsViewData={this.state.analyticsViewData}
                                        affectedServices={affectedServices}
                                        onDisplayBactraceGraph={this.handleDisplayBacktraceGraph}
                                        onDisplayImpactGraph={this.handleDisplayImpactGraph}
                                        selectedErrorType={selectedErrorType}
                                        getErrorTraceList={this._getErrorTraceList}
                                        traceColors={this.state.traceColors}
                                        currentView={this.state.currentView}
                                    />
                                )
                            }
                        </FlexBlock>
                    </FlexBlock>
                    :
                    <PlaceholderView title="Nothing to process!"  text="Enter the index and datetime range to view all error types" />
                }
                {this.state.validationError &&
                    <EuiOverlayMask>
                        <EuiConfirmModal 
                            title="Validation Error" 
                            onCancel={()=>this.setState({validationError:null})}
                            onConfirm={()=>this.setState({validationError:null})}
                            confirmButtonText="OK"
                        >
                            {this.state.validationError}
                        </EuiConfirmModal>
                    </EuiOverlayMask>
                }
            </FlexBlock>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorTypeView);