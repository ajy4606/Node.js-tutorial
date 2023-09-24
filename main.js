var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData.id);
    console.log(url.parse(_url, true));

    fs.readdir('./data', function(error, filelist){
      console.log(filelist);
      var list = '<ol>';
      for (let i = 0; i<filelist.length; i++) {
        list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      }
      list = list + '</ol>';
    }) 

    if (pathname === '/') {
      if (queryData.id === undefined){
        
          var title = 'Welcome';
          var description = 'Hello, Node.js';

            /*
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
          */

            // var i = 0;
            // while (i<filelist.length){
            //   list = list + `<li><a href="/?id=${filelist[i]}">${filelsit[i]}</a></li>`
            //   i++;
            // }

            var template = `
              <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
           ${list}
            <h2>${title}</h2>
            <p>${description}</p>
          </body>
          </html>
              `;
              response.writeHead(200);
              console.log(__dirname+url);
              response.end(template);
           // 사용자에게 전송할 데이터를 생성한다.
            
       
      } else {
        fs.readFile(`data/${queryData.id}`, 'utf8', (err,description) => {
          var title = queryData.id;
          var template = `
          <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
          ${lists}
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
          `;
          response.writeHead(200);
          console.log(__dirname+url);
          response.end(template);
       // 사용자에게 전송할 데이터를 생성한다.
        });
      }
    } else {
      response.writeHead(404);
      response.end('Not found');
    }

});
app.listen(3000);