console.log("Top !😘");

const HTTP = require('http');
const FS = require('fs');
const EJS = require('ejs');
const { head, foot, nav} = require("./template/template");

const SERVER = HTTP.createServer(function (req, res) {
    res.writeHead(200);

    let METHOD = req.method;
    let URL = req.url;

    if (METHOD == "GET") {
        if (URL == "/home") {
            let data = JSON.parse(FS.readFileSync("./data/MOCK_DATA.json").toString())
            let template = FS.readFileSync("./template/home.ejs").toString();
            let view = EJS.render(template);

            res.write(view);
        }
        else if(URL == "/contact") {
            res.write(`
            ${head}
            ${nav}
            <h1>Contact</h1>
            ${foot}
            `);
        }
        else {
            res.write(`<h1>404</h1>`);
        }
    }
    res.end();
});

SERVER.listen(3000)