var express = require("express");
var app = express();

app.set("view engine","ejs");

app.get("/",
		function(req,res)
		{
			res.render("landing");//.ejs file; view engine
		}
		);

app.get("/campgrounds", 
			function(req,res)
			{
				
			}
		)
		
		
app.listen(3000, process.env.IP,
			function()
			{
				console.log("Yelp Camp Server has Started")
			}
		  )