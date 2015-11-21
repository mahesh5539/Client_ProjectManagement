var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
/*
router.get('/http://localhost:8080/api/v1/user',function(req,res,data){
	  if(data.valid == "user"){
		  res.send({"user":"valid"});
	  }
	  else{
		  res.send({"user":"invalid"});
	  }
	});*/

module.exports = router;
