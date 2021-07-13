const http = require('http');

const server = http.createServer((request, response) =>{
    console.log(request.url);
    console.log(request.headers);
    console.log(request.headers['accept-language']);
    
    
    if (request.url ==='/'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write(`Bahasa = ${request.headers['accept-language']}<br><br>`);
        //response.write(`request : ${request.headers}`);
        response.write('<center><h1>Toko Bangunan</h1></center><br><br>');
        response.write("<a href='/Skop'>Tipe Skop</a><br>");
        response.write("<a href='/Kabel'>Tipe Kabel</a><br>");
        response.write("<a href='/Semen'>Tipe Semen</a><br>");
        response.end();
    }else if(request.url ==='/Skop' ) {
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Ini Tipe-Tipe Skop');
        response.end();
    }else if(request.url ==='/Kabel'){
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/html');
        response.write('Ini Tipe-Tipe Kabel');
        response.end();
    }else if(request.url ==='/Semen'){
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.write('Ini Tipe-Tipe Semen');
            response.end();
    }else{
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('Barang Tidak Ada/Tidak tersedia');
        response.end();
    }


});

server.listen(4012,() => {
    // Console will print the message
	console.log('sever listen http://129.213.54.196:4012' )    
});
