<!-- We don't need a full layout in this file because this page will be parsed with Ajax. -->

<!-- Top Navbar-->
<div class="navbar"  >
    <div class="navbar-inner" style="background: #1436b9d6">
        <div class="left">
            <a href="#" class="back link">
                <i class="icon icon-back mr-3"></i>
               <!--  <span>Back</span> -->
                <div class=" sliding " style="color: white">Namewise List</div>
            </a>
        </div>
       
        <!-- <div class="right">
            <a href="#" class="link icon-only open-panel"><i class="icon icon-bars"></i></a>
        </div> -->
    </div>
</div>

<style type="text/css" media="screen">
        @font-face {
            font-family: centurySchoolbook;
            src: url(/fonts/century-schoolbook.ttf);
        }
       body {
           font-family: centurySchoolbook;
           font-size:30px;
       }
</style>
<style type="text/css">
    div[class*="col"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 5px;
  margin-bottom: 15px;
  font-size: 12px;
}
.ios {
  --f7-grid-gap: 15px;
}
.md {
  --f7-grid-gap: 16px;
}
input.placeholder {
    text-align: center;
}
.Field {
    top:413px;
    right:290px;
    width: 355px;
    height: 30px;
    position: absolute;
    border: none;
    font-size: 17;
    text-align: center;
}

</style>


<div class="pages">
    <div data-page="alphabeticalwise" class="page" >
        <div class="page-content" style="padding-top: 43px !important">
            <div class="content-block" style="margin: 0px !important">
      
       <div class="row"  style="background: #3ab1f3ba;">
        <div class="container" style="max-width: 90%" >
       <div class="row pt-1 pb-0 pl-3 pr-3"  >

    <!-- Each "cell" has col-[width in percents] class -->
  <!-- style="box-shadow: 0 0 0 1px hsl(0, 0%, 80%), 0 0 0 1px hsl(0, 0%, 90%); border-radius: 20%;" -->
    <div class="col text-center    p-1" >
      <input type="text" name="lname"  class="form-control rounded text-center" onkeyup="start_search();" id="last_name"  style="width: 100%;" placeholder="Last Name">

    
    </div>
   <div class="col text-center    p-1" >
      <input type="text"name="voter_name"   class="form-control rounded text-center"  onkeyup="start_search();" id="voter_name"  style="width: 100%;" placeholder="First Name">
    
    </div>
    <div class="col text-center    p-1" >
      <input type="text" name="relation_name" onkeyup="start_search();"  class="form-control rounded text-center"  style="width: 100%;" id="relation_name" placeholder="Midel Name">
    
    </div>
  </div>
    <div class="row pt-0 pr-3 pl-3 pb-3"  >
    <div class="col text-center    pt-0 pr-1 pl-1" >
      <input type="text" name="card_no" id="card_no" onkeyup="start_search();" class="form-control rounded text-center"  style="width: 100%" placeholder="Card No">
    
    </div>
   <div class="col text-center    pt-0 pr-1 pl-1" >
      <input type="text" name="booth_no" onkeyup="start_search();" class="form-control rounded text-center" id="booth_no"  style="width: 100%" placeholder="Booth No">
    
    </div>
    <div class="col text-center    pt-0 pr-1 pl-1" >
      <input type="text" name="fname"  class="form-control rounded text-center"  style="width: 100%" placeholder="Wild Search">
    
    </div>
</div>
    <div class="container" style="max-width: 70%;">
  <div class="row pt-0 pb-3 pl-0 pr-1"  >
    <div class="col">
      <input type="button" class="p-2" name="fname"  class="form-control rounded text-center"  style="width: 100%;background: green;border-radius: 10px" value="Search">
      
    </div>
    <div class="col">
      <input class="p-2" type="button" name="fname" class="form-control rounded text-center"  style="width: 100%;background: yellow;border-radius: 10px" value="Reset" >
      
    </div>
  </div>
  </div>

</div>
</div>

  <div class="row pt-1 pb-0 pl-3 pr-2" style="border-bottom: groove;border-top: solid;"  >
    <div class="col  p-1 text-center">
     Photo
      
    </div>
    <div class="col p-1 text-center">
    SrNo
    </div>
    <div class="col p-1 text-center">
    House.No
    </div>
    <div class="col p-1 text-center">
    Name
    </div>
    <div class="col p-1 text-center">
    Sex
    </div>
     <div class="col p-1 text-center">
    age
    </div>
  </div>
  <div id="data">

  </div>

  




  


            </div>
        </div>
    </div>
</div>
