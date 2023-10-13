const http = require('http')
const ejs = require('ejs')
const fs = require('fs')
const { head, nav, foot } = require("./templates/initTemplate")


const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'})

    let path = req.url
    let httpVerb = req.method

    if(httpVerb == "GET")
    {
        if(path == "/home")
        {
            let title = "super titre on the super page"
            let datas = JSON.parse(fs.readFileSync("./datas/MOCK_DATA.json").toString())
            
            let template = fs.readFileSync("./templates/home.ejs").toString()
            let test = ejs.render(template, { title : title, datas : datas } )
            res.write(test)
        }
        else if(path == "/contact")
        {
            res.write(`
                ${head}
                <h1>Page Contact</h1>
                ${nav}
                ${foot}
            `)
        }
        else
        {
            res.writeHead(404, {'Content-Type': 'text/html'})
            res.write(`
                ${head}
                <h1>Page Not Found</h1>
                ${nav}
                ${foot}
            `)
        }
    }

    res.end()
})


server.listen(3000, console.log('Server is running on port 3000'))

//watcher server -> nodemon -> npm install -g nodemon
//autoriser l'execution des script dans la console --> Set-ExecutionPolicy -Scope "CurrentUser" -ExecutionPolicy "Unrestricted"