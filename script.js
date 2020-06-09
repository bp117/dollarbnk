const fs = require("fs");


function getOnlyRequiredFieldsFromData(dataDumpPath) {
    let data = [];
    let jsonData = JSON.parse( fs.readFileSync(dataDumpPath).toString() );

    jsonData.forEach(entry=>{
        let processedEntry = {};
        processedEntry["parent"]      =  { "id": entry[ "parent" ][ "id" ] }
        processedEntry["trace"]       =  { "id": entry[ "trace" ][ "id" ] }
        processedEntry["service"]     =  { "name": entry[ "service" ][ "name" ] }
        processedEntry["transaction"] =  { "id": entry[ "transaction" ][ "id" ] }
        processedEntry["span"]        =  { "id": entry[ "span" ][ "id" ], "name": entry[ "span" ][ "name" ] }
        processedEntry["@timestamp"]  =  entry[ "@timestamp" ]

        data.push(processedEntry);
    });

    return data;
}

function getData(inputDataDump, outputPath){
    let data = getOnlyRequiredFieldsFromData(inputDataDump);
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
}


getData("/path/to/dump/data.json", "/path/to/output/data.json")