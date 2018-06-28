var express = require('express');
var router = express.Router();
var fs = require("fs"),
path = require("path"),
util = require("util");

/* GET forms lists. */
router.get('/', function(req, res, next) {
      var content;
      fs.readFile(path.join("public/json","forms.json"), 'utf8',function (err,data) {
          if (err) {
              console.log(err);
              process.exit(1);
          }
          content = util.format(data);
          var c = JSON.parse(content);
          forms = c.forms;
          response = [];
          for(var i=0; i < forms.length; i++)
          {
              response[i]=({id:forms[i].id, name:forms[i].title });
          }
        res.send(response);
      });
});

// SEND FORM AGAINST ID 
router.get('/id/:id', function(req, res, next) {
  var content;
  fs.readFile(path.join("public/json","forms.json"), 'utf8',function (err,data) {
      if (err) {
          console.log(err);
          process.exit(1);
      }
      content = util.format(data);
      response = JSON.parse(content);
      
      if(!response.forms[req.params.id])
      {
        res.send("No Record found against id "+req.params.id);
      }
      else
      {
        res.send(response.forms[req.params.id]);
      }
  });
});

module.exports = router;