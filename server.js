var express = require("express"); //loading express to server
var app = express();

var fs=require("fs");

app.use(express.static(__dirname));
//loading the html file on server
app.get("/",function(req,res)
{
	res.sendFile(__dirname+"/index.html"); 
});
app.listen(9090);
console.log("Server running on 9090");



app.put("/update/:cardIndex/:panelIndex/:targetPanel/:newCardPosition",function(req,res)
		{
	var cardIndex=req.params.cardIndex;
	var panelIndex=req.params.panelIndex;
	var targetPanel=req.params.targetPanel;
	var newCardPosition=req.params.newCardPosition;
	
	var data=JSON.parse(fs.readFileSync("data/data.json"));	
	
	data.board[targetPanel].panel.splice(newCardPosition,0,data.board[panelIndex].panel[cardIndex]);
	data.board[panelIndex].panel.splice(cardIndex,1);
	
	fs.writeFileSync("data/data.json",JSON.stringify(data));
	res.end();
		});







app.put("/addCard/:index/:card",function(req,res){
	
	var card=JSON.parse(req.params.card);
	var index=req.params.index;
	
	var data=JSON.parse(fs.readFileSync("data/data.json"));	
	
	data.board[index].panel.push(card);
	fs.writeFileSync("data/data.json",JSON.stringify(data));
	res.end();
	
});