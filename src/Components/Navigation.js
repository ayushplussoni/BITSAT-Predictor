const Navigation=()=> {
	return <div><nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
      <a class="navbar-brand" href="#myNavbar"><p class="coverup">BITSAT PREDICTOR</p></a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="coverup" ><a href="#home">Home</a></li>
        <li class="coverup"><a href="#predictor">BITSAT</a></li>
        <li class="coverup"><a href="#credits">Credits</a></li>
        
      </ul>
      
    </div>
  </div>
</nav></div>;
	}
	export default Navigation;


