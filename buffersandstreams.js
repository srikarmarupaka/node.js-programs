// Buffers are the small data packets to be sent as the request/reponse to/from the server.
//Streams are flow of buffers.

// WritableStream : allow nodejs to write data to the stream.
// ReadableStream : allow nodejs to read data from the stream.
// Duplex Stream : Can read and write to/from the stream.

var http = require('http');
var fs=require('fs');

 var myReadStream=fs.createReadStream(__dirname + '/samplehtml.html', 'utf8'); //if utf8 is not put, we will not get english format.
//  var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');
// myReadStream.on('data', function(chunk){
//     console.log('new chunk received');
//     myWriteStream.write(chunk);
// }); //here it is a single buffer made by the computer. for a large data buffers may increase to make a stream.

//pipes : takes data from a read stream and write(pipes) them to the write stream.
// myReadStream.pipe(myWriteStream);
//pipe method is only used in the readable streams.


  var server =http.createServer(function(req,res){
      console.log('request was made by:'+ req.url);
      res.writeHead(200, {'Content-Type': 'text/html'});
      myReadStream.pipe(res);
  });
  server.listen(3000, '127.0.0.1');

//serving json to the clients
// var server= http.createServer(function(req,res){
//     console.log('request was made by'+req.url);
//     res.writeHead(300,{'Content-Type':'application/json'});
//     var myObj={
//         name:'Srikar',
//         job:'Student',
//         Age:21,
//     }
//     res.end(JSON.stringify(myObj)); //end expects either a string or an object.
// });

//   server.listen(3000, '127.0.0.1');
