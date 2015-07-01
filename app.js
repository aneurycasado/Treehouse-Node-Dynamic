var router = require("./router.js")

//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to peform the profile look ups and servor our template via HTTP



//Create a web server
var http = require('http');
http.createServer(function (request, response) {
  router.home(request,response);
  router.user(request,response);
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


//2Handle HTTP route GET / and POST / i.e. Home


//3. Handle HTTP route GET /:username i.e / chalker
  //if url == "/...."
    // get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

//4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string
