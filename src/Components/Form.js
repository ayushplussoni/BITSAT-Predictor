const Form=()=> {
  
  var marks=document.getElementById("marks");

  var c1=document.getElementById("pil");
  var c2=document.getElementById("goa");
  var c3=document.getElementById("hyd");

  var b1=document.getElementById("cs");
  var b2=document.getElementById("eee");
  var b3=document.getElementById("mech");
  var b4=document.getElementById("chemi");
  var b5=document.getElementById("civ");
  var b6=document.getElementById("bio");
  var b7=document.getElementById("eco");
  var b8=document.getElementById("chem");
  var b9=document.getElementById("phy");
  var b10=document.getElementById("mat");
  var b11=document.getElementById("pharma");

 // console.log(marks);
  


  

  
  
  



	return <div>
		<form name="survey">
        <div class="bitsat-score">BITSAT SCORE</div>
        <br></br><br></br>
  		<input type="number" class="bitsat-score1"  placeholder="Out of 450" id="marks" value="284" ></input><br></br><br></br>
      
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
      <div><input type="checkbox" id="math" name="math" value="false"
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
 class="button1">PREDICT</button>
</span>
</div>;
	}

	export default Form;


