//To work with file system on your computer, include the File System Module (fs) using require.
let fs = require("fs");
//To store data in spreadsheet, include xlsx using require.
let xlsx = require("xlsx");
//To work with directories and file paths, include the Path Module (path) using require.  
let path=require("path");

function createExcelExecutor(jsonContent){

    let filePath = path.join(__dirname,"Birthday_Information.xlsx");

    let fileExist = checkExistence(filePath);
    let playerEntries = [];
    if (fileExist) {
        let JSONdata = excelReader(filePath, "First");
        playerEntries = JSONdata;
        playerEntries.push(jsonContent);
        excelWriter(filePath, playerEntries, "First");
    } else {
        playerEntries.push(jsonContent);
        excelWriter(filePath, playerEntries, "First");
    }
}
function checkExistence(filePath) {
    return fs.existsSync(filePath);
}

function excelReader(filePath,sheetName) {
    if (fs.existsSync(filePath)==false) {
        return null;
    } else {
        let content = xlsx.readFile(filePath);
        let excelData = content.Sheets[sheetName];
        let data = xlsx.utils.sheet_to_json(excelData);
        return data;
    }
}

function excelWriter(filePath, json, sheetName) {
    let workbook = xlsx.utils.book_new();
    let newWorkBook = xlsx.utils.json_to_sheet(json);
    xlsx.utils.book_append_sheet(workbook, newWorkBook, sheetName);  
    xlsx.writeFile(workbook, filePath);
}




module.exports={
    createExcelExecutorFn:createExcelExecutor
}
