const electron = require("./submodules/athenapdf/cli/node_modules/electron");
const path = require("path");
// const path = require("./submodules/athenapdf/cli/node_modules/path"); 
const spawn = require("child_process").spawn;
// const spawn = require("./submodules/athenapdf/cli/node_modules/child_process").spawn; 

console.log('hello');


convertHTMLtoPDF('test.html', 'test.pdf');

function convertHTMLtoPDF(inputFileName, outputFileName) {

    console.log('convertHTMLtoPDF called');

    ls = spawn('./submodules/athenapdf/cli/bin/athenapdf', ['./submodules/.tmp/input/' + inputFileName, './submodules/.tmp/output/' + outputFileName]);

    ls.stdout.on('data', data => {
        console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', data => {
        console.log(`stderr: ${data}`);
    });

    ls.on('close', code => {
        console.log(`child process exited with code ${code}`);
    });
}

// module.export = {
//     createPDF: createPDF
// }