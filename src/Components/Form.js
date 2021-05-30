import { useState } from 'react';
const Form=()=> {
  
  
  


  
 // if(c1===true)console.log("Ticked");

 // console.log(marks);
 var campuses=[];
 var branches=[];
 /*

 if(c1===true)campuses.push("Pilani");
 if(c2===true)campuses.push("Goa");
 if(c3===true)campuses.push("Hyderabad");

 if(b1===true)branches.push("Computer Science");
 if(b2===true)branches.push("Electrical and Electronicsm");
 if(b3===true)branches.push("Mechanical");
 if(b4===true)branches.push("Chemical");
 if(b5===true)branches.push("Civil");
 if(b6===true)branches.push("Biology");
 if(b7===true)branches.push("Economics");
 if(b8===true)branches.push("Chemistry");
 if(b9===true)branches.push("Physics");
 if(b10===true)branches.push("Mathematics");
 if(b11===true)branches.push("Pharmacy");

 */
 const [myJSON,setmyJSON]=useState("Your Options will appear here !");
 const [marks,setmarks]=useState(0);
 const [C1,setC1]=useState("false");
 const [C2,setC2]=useState("false");
 const [C3,setC3]=useState("false");
 const [B1,setB1]=useState("false");
 const [B2,setB2]=useState("false");
 const [B3,setB3]=useState("false");
 const [B4,setB4]=useState("false");
 const [B5,setB5]=useState("false");
 const [B6,setB6]=useState("false");
 const [B7,setB7]=useState("false");
 const [B8,setB8]=useState("false");
 const [B9,setB9]=useState("false");
 const [B10,setB10]=useState("false");
 const [B11,setB11]=useState("false");

 
 


 const check= async ()=>
 {
  
  var m=document.getElementById("marks").value;
  var c1=document.getElementById("pil").checked;
  var c2=document.getElementById("goa").checked;
  var c3=document.getElementById("hyd").checked;
  var b1=document.getElementById("cs").checked;
  var b2=document.getElementById("eee").checked;
  var b3=document.getElementById("mech").checked;
  var b4=document.getElementById("chemi").checked;
  var b5=document.getElementById("civ").checked;

  var b6=document.getElementById("bio").checked;
  var b7=document.getElementById("eco").checked;
  var b8=document.getElementById("chem").checked;
  var b9=document.getElementById("phy").checked;
  var b10=document.getElementById("math").checked;
  var b11=document.getElementById("pharma").checked;

  var M=m;
  const S="http://localhost:5000/";

  
  
  const handleClick=()=>setmyJSON(JSON.stringify(obj));
  const handleMarks=()=>setmarks(m);
  const handlePilani=()=>setC1(c1);
  const handleGoa=()=>setC2(c2);
  const handleHyderabad=()=>setC3(c3);
  const handleCse=()=>setB1(b1);
  const handleeee=()=>setB2(b2);
  const handlemech=()=>setB3(b3);
  const handlechemi=()=>setB4(b4);
  const handleciv=()=>setB5(b5);
  const handlebio=()=>setB6(b6);
  const handleeco=()=>setB7(b7);
  const handlechem=()=>setB8(b8);
  const handlephy=()=>setB9(b9);
  const handlemath=()=>setB10(b10);
  const handlepharma=()=>setB11(b11);




  
  handleMarks();
  handlePilani();
  handleGoa();
  handleHyderabad();
  handleCse();
  handleeee();
  handlemech();
  handlechemi();
  handleciv();
  handlebio();
  handleeco();
  handlechem();
  handlephy();
  handlemath();
  handlepharma();


  if(c1===true)campuses.push("Pilani");
  if(c2===true)campuses.push("Goa");
  if(c3===true)campuses.push("Hyderabad");

  if(b1===true)branches.push("Computer Science");
  if(b2===true)
  {
  branches.push("Electrical and Electronics");
  branches.push("Electronics and Communication");
  branches.push("Electronics and Instrumentation");
  }
  if(b3===true)branches.push("Mechanical");
  if(b4===true)branches.push("Chemical");
  if(b5===true)branches.push("Civil");
  if(b6===true)branches.push("Biological Science");
  if(b7===true)branches.push("Economics");
  if(b8===true)branches.push("Chemistry");
  if(b9===true)branches.push("Physics");
  if(b10===true)branches.push("Mathematics");
  if(b11===true)branches.push("Pharmacy");
  
 /*
 .concat(m).concat("/:").concat(campuses).concat("/:").concat(branches)
  console.log(campuses);
  console.log(branches);
  console.log(marks)
  */
  var s2=S.concat(m);
  var s3=s2.concat("/:");
  var s4=s3.concat(campuses);
  var s5= s4.concat("/:");
  var s6=s5.concat(branches);
  const res =  await fetch(s6,{method:"POST"});
  const data = await res.text();
  var obj = JSON.parse(data);
  handleClick();
  
  
  
  
 
 }
  return <div>
		<form name="survey">
        <div class="bitsat-score">BITSAT SCORE</div>
        <br></br><br></br>
  		<input type="number" class="bitsat-score1"  placeholder="Out of 450" id="marks"  ></input><br></br><br></br>
      
    	<div   class="bitsat-score">SELECT  </div>
      <br></br>
    	<div id="cover2">
    		<div><input type="checkbox" id="cs" name="cs" value="false"></input>
  			<label for="cs">Computer Science (B.E.)</label></div>

  		<div><input type="checkbox" id="eee" name="eee" value="false"
         ></input>
  		<label for="eee">Electronics (B.E.)</label></div>

  		<div><input type="checkbox" id="mech" name="mech"value="false"
         ></input>
  		<label for="mech">Mechanical (B.E.) / Manufacturing (B.E.) </label></div>

  		<div><input type="checkbox" id="chemi" name="chemi" value="false"
         ></input>
  		<label for="chemical">Chemical (B.E.)</label></div>

  		<div><input type="checkbox" id="civ" name="civ" value="false"
         ></input>
  		<label for="civil">Civil (B.E.)</label></div>

  		<div><input type="checkbox" id="bio" name="bio" value="false"
         ></input>
  		<label for="bio">Biological Science (M.S.)</label></div>
      <div><input type="checkbox" id="math" name="math" value= "false"
         ></input>
      <label for="eco">Mathematics (M.S.)</label></div>


  		<div><input type="checkbox" id="chem" name="chem" value="false">
        </input>  <label for="chem">Chemistry(M.S.)</label></div>
		<div><input type="checkbox" id="phy" name="phy" value="false"
         ></input>
  		<label for="phy">Physics(M.S.)</label></div>

		<div><input type="checkbox" id="eco" name="eco" value="false"
         ></input>
  		<label for="eco">Economics (M.S.)</label></div>

  		<div><input type="checkbox" id="pharma" name="pharma" value="false"
         ></input>
  		<label for="pharma">Pharmacy (B.E.)</label></div>
    	</div>

    	<br></br><br></br>
    
    
    <div class="bitsat-score">SELECT CAMPUS</div><br></br>
    <div id="cover2">
      <span id="cover5"></span>
    <input type="checkbox" id="pil" name="pil" value="false" ></input>
    <span class="pilani">Pilani</span>
  
    <input type="checkbox" id="goa" name="goa" value="false" ></input>
  <span class="pilani">Goa</span>
  <input type="checkbox" id="hyd" name="hyd" value="false"></input>
  <span class="pilani">Hyderabad</span>
  </div>
    


</form>
<span id="cover6">



  <button 
 class="button1" onClick={check}>PREDICT</button><div>{myJSON}</div>
</span>
</div>;
	}

	export default Form;


