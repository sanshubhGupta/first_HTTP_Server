let http = require('http');
let fs = require('fs');
let url = require('url');

http.createServer((req, res)=>{
    let q = url.parse(req.url, true);
    let fileName;
    if(q.pathname == '' || q.pathname == '/'){
        fileName = './index.html';
    }
    else{
        fileName = '.' + q.pathname + '.html'
    }
    fs.readFile(fileName, (err, data)=>{
        if(err){
            fs.readFile('404.html', (err, data)=>{
                res.writeHead(200, {'Content-type': 'text/html'});
                res.write(data);
                return res.end();
            })
        }
        else{
            res.writeHead(200, {'Content-type': 'text/html'});
            res.write(data);
            return res.end();
        }
    })
}).listen(8080);