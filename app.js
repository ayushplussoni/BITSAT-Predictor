const express= require("express");
const app= express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.post("/:marks/:campuses/:branches",(req,res)=>{

	//res.send("AYUSH SONI")
	

	//res.send("Ayush Soni is the Rockstar");
	//sendStatus(404);
	var list2=[];
	var len=list.length;
	//console.log(list);
	//var campuses=["Pilani","Goa","Hyderabad"];
	//var branches=["Computer Science"];
	//var marks=400;
	//var campuses=request.("campuses");
	//var branches=request.("branches");
	//var marks=request.getParameterValues("marks");
	
	var campuses=[];
	var branches=[];
	  campuses=req.params.campuses;
	  branches=req.params.branches;
	var marks= req.params.marks;
//	console.log(marks);
	//console.log(campuses);
//	console.log(branches);

	for(var i=0;i<len;i++)
	{
	var Branch=branches.includes(list[i].branch);
	var Campus=campuses.includes(list[i].campus);
	if(list[i].marks<=marks&&(Branch===true&&Campus===true))
	//if(list[i].marks<=marks)
		list2.push(list[i]);
	}
	console.log(list2);

res.status(200).send(list2);

	//res.send("I love Ayush");


	
	});
/*app.get("/aim",(req,res)=>{
	res.send("Ayush Soni will win all the hearts <3");
});*/
app.listen(5000);


/*const http= require("http");
const express= require("express");
const server=http.createServer();
server.listen("5000");
console.log("HI!!");*/
const list=[

{
	marks :372,
	branch :"Computer Science",
	campus:"Pilani"

},
{
	"marks" :347,
	"branch" :"Computer Science",
	"campus":"Goa"

},
{
	"marks" :336,
	"branch" :"Computer Science",
	"campus":"Hyderabad"

},
{
	"marks" :333,
	"branch" :"Electrical and Electronics",
	"campus":"Hyderabad"

},
{
	"marks" :323,
	"branch" :"Electronics and Instrumentation",
	"campus":"Pilani"

},
{
	"marks" :320,
	"branch" :"Electronics and Communications",
	"campus":"Goa"

},
{
	"marks" :314,
	"branch" :"Electronics and Communications",
	"campus":"Hyderabad"

},
{
	"marks" :306,
	"branch" :"Electrical and Electronics",
	"campus":"Goa"

},
{
	"marks" :304,
	"branch" :"Economics",
	"campus":"Pilani"

},
{
	"marks" :300,
	"branch" :"Electronical and Electronics",
	"campus":"Hyderabad"

},
{
	"marks" :298,
	"branch" :"Mechanical",
	"campus":"Pilani"

},
{
	"marks" :293,
	"branch" :"Electronics and Instrumentation",
	"campus":"Goa"

},
{
	"marks" :290,
	"branch" :"Electronics and Instrumentation",
	"campus":"Hyderabad"

},
{
	"marks" :290,
	"branch" :"Economics",
	"campus":"Goa"

},
{
	"marks" :286,
	"branch" :"Mathematics",
	"campus":"Pilani"

},
{
	"marks" :283,
	"branch" :"Physics",
	"campus":"Pilani"

},
{
	"marks" :281,
	"branch" :"Economics",
	"campus":"Hyderabad"

},
{
	"marks" :271,
	"branch" :"Physics",
	"campus":"Goa"

},
{
	"marks" :270,
	"branch" :"Chemical",
	"campus":"Pilani"

},
{
	"marks" :269,
	"branch" :"Mechanical",
	"campus":"Goa"

},
{
	"marks" :265,
	"branch" :"Mathematics",
	"campus":"Goa"

},
{
	"marks" :261,
	"branch" :"Biological Sciences",
	"campus":"Pilani"

},
{
	"marks" :260,
	"branch" :"Mechanical",
	"campus":"Hyderabad"

},
{
	"marks" :257,
	"branch" :"Mathematics",
	"campus":"Hyderabad"

},
{
	"marks" :256,
	"branch" :"Physics",
	"campus":"Hyderabad"


},
{
	"marks" :253,
	"branch" :"Manufacturing",
	"campus":"Pilani"

},
{
	"marks" :254,
	"branch" :"Civil",
	"campus":"Pilani"

},


{
	"marks" :249,
	"branch" :"Chemistry",
	"campus":"Goa"

},
{
	"marks" :248,
	"branch" :"Chemical",
	"campus":"Goa"

},
{
	"marks" :246,
	"branch" :"Biological Sciences",
	"campus":"Hyderabad"

},

{
	"marks" :240,
	"branch" :"Biological Sciences",
	"campus":"Hyderabad"

},
{
	"marks" :240,
	"branch" :"Chemistry",
	"campus":"Hyderabad"

},
{
	"marks" :240,
	"branch" :"Chemical",
	"campus":"Hyderabad"

},
{
	"marks" :240,
	"branch" :"Civil",
	"campus":"Hyderabad"

},

{
	"marks" :203,
	"branch" :"Pharmacy",
	"campus":"Pilani"

},

{
	"marks" :161,
	"branch" :"Pharmacy",
	"campus":"Hyderabad"

}

]

