const http = require("http");
const port = process.env.port || 3000;

const handler = (req,res) => {
  console.log('Server receive request.');
  res.end('Hello world');
};

const server = http.createServer(handler);

server.listen(port, err => {
  if(err) {
    console.log(err);
  } else {
    console.log('Server listening on port : ', port);
  }
});