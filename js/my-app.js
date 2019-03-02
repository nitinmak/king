// Initialize app
var myApp = new Framework7();
var url = 'http://kingmaker.bitinfous.com/api/'

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});



var db = window.openDatabase("tutorialdb", "1.0", "tutorial database", 20000); //will create database tutorialdb or open it
        document.addEventListener("deviceready", onDeviceReady, false);
  
        function onDeviceReady() {

document.addEventListener("backbutton", function (e) {
            e.preventDefault();
        }, false );
            // Create Table
            db.transaction(populateDB, errorCB, successCB);

            // Select records
            // fetchData();
        }

        function populateDB(tx){
              // tx.executeSql('DROP TABLE IF EXISTS data_master');
            tx.executeSql('CREATE TABLE IF NOT EXISTS data_master (data_id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,constituency_id INTEGER NOT NULL,pc_name VARCHAR ,ac_name VARCHAR,mnc VARCHAR,zp VARCHAR,pc VARCHAR,gp VARCHAR,part_no VARCHAR,ward_no VARCHAR,booth_no VARCHAR,booth_name VARCHAR,sr_no VARCHAR,photo VARCHAR,voter_name VARCHAR,mobile_no VARCHAR,relation_name VARCHAR,surname VARCHAR,relation_type VARCHAR,gender VARCHAR,age VARCHAR,house_no VARCHAR,epic_id VARCHAR,card_no VARCHAR,address VARCHAR,village_name VARCHAR,booth_address VARCHAR,society VARCHAR,bibhag VARCHAR,old_town VARCHAR ,caste VARCHAR,support VARCHAR,blood_group VARCHAR,education VARCHAR,occupation VARCHAR,birth_date VARCHAR,marriage_date VARCHAR,email VARCHAR,adhar VARCHAR,ration_card VARCHAR,dead VARCHAR,lastModified VARCHAR )');
            tx.executeSql('CREATE TABLE IF NOT EXISTS active_user (id INTEGER PRIMARY KEY AUTOINCREMENT,fname TEXT NOT NULL,lname TEXT NOT NULL,mobile TEXT NOT NULL,username TEXT NOT NULL,password TEXT NOT NULL)');
        }
         

        // Fetch all records
        function fetch_login_data(){
              db.transaction(function(tx){
                
                 tx.executeSql("select * from candidate",[],function(tx1,result){
                    var len = result.rows.length;
                    // alert(len);
                   // if(len > 0){
                   //  window.localStorage.setItem("user_id", '1');
                   // }else{
                   //   window.localStorage.setItem("user_id", '0');
                    
                   // }
                    // for (var i=0; i<len; i++){
                    //     var fname = result.rows.item(i).fname;

                    //     var ul = document.getElementById("list");
                    //     var li = document.createElement("li");
                    //     li.appendChild(document.createTextNode(fname));
                    //     ul.appendChild(li);
                    // }
                    
                },errorCB);
            }, errorCB, successCB);

        }
        function start_data_search(){
          var flt = window.localStorage.getItem('select_caste');
            var fld =  $$('#data_type').val();
            var votername =  $$('#voter_name').val();
          var last_name =  $$('#last_name').val();
          var relation_name =  $$('#relation_name').val();
          var card_no =  $$('#card_no').val();
          var booth_no =  $$('#booth_no').val();
          if(window.localStorage.getItem('select_caste') ){
           
             var flt = window.localStorage.getItem('select_caste');
          }else if(window.localStorage.getItem('select_address') ){
             var flt = window.localStorage.getItem('select_address');

          }else{
             var flt = window.localStorage.getItem('filter');

          }

          // alert(fld);alert(flt);


      fetch_data_list(fld,flt,votername,last_name,relation_name,card_no,booth_no);
          
        }
        function start_search(flt = 0){
          var votername =  $$('#voter_name').val();
          var last_name =  $$('#last_name').val();
          var relation_name =  $$('#relation_name').val();
          var card_no =  $$('#card_no').val();
          var booth_no =  $$('#booth_no').val();
         
          fetchData(flt,votername,last_name,relation_name,card_no,booth_no);
        }


         function fetchData(filter = 0,votername = 0,last_name = 0,relation_name = 0,card_no = 0,booth_no = 0){
            // alert(votername);
            var where = 'where 1 = 1';
            var flt = '';
            if(votername != '' && votername != 0){
                where += ' and';
                 where += " voter_name like '"+votername+"%' ";
            }
             if(last_name != '' && last_name != 0){
               where += ' and';
                 where += " surname like '"+last_name+"%' ";
            }
              if(relation_name != '' && relation_name != 0){
               where += ' and';
                 where += " relation_name like '"+relation_name+"%' ";
            }

            if(card_no != '' && card_no != 0){
               where += ' and';
                 where += " card_no like '"+card_no+"%' ";
            }

            if(booth_no != '' && booth_no != 0){
               where += ' and';
                 where += " booth_no like '"+booth_no+"%' ";
            }
            if(filter != 0 && filter != ''){
              if(filter == 'alpha'){
              flt += ' GROUP BY voter_name ORDER BY voter_name ASC';
              }
            }
            // alert(where);
            db.transaction(function(tx){
// alert('select * from data_master '+where+' '+flt+' ');
               
// SELECT DISTINCT class FROM student 
// SELECT
//  *,
//  count(*)
// FROM
//  tracks
// GROUP BY
//  albumid;
                tx.executeSql("select * from data_master "+where+" "+ flt +" ",[],function(tx1,result){
                    var len = result.rows.length;
                    if(len > 0){
                        $('#data').html('');
                        var j = 0
                           for (var i=0; i<len; i++){
                            j++;
                        // var photo = result.rows.item(i).photo;
                        var photo = 'photo.jpg';
                        var sr_no = result.rows.item(i).sr_no;
                        var house_no = result.rows.item(i).house_no;
                        var mobile = result.rows.item(i).mobile;
                        var gender = result.rows.item(i).gender;
                        var voter_name = result.rows.item(i).voter_name;
                        var age = result.rows.item(i).age;

                        var ul = document.getElementById("data");
                         
   var data = '<div class="row pt-1 pb-0 pl-3 pr-2 " style="border-bottom:groove;"  ><div class="col  p-1 text-center">'+photo+'</div><div class="col p-1 text-center">'+j+'</div><div class="col p-1 text-center">'+house_no+'</div><div class="col p-1 text-center">'+voter_name+'</div><div class="col p-1 text-center">'+gender+'</div><div class="col p-1 text-center">'+age+'</div></div>';
                        // var li = document.createElement("data");
                        // li.appendChild(document.createTextNode(voter_name));
                        // ul.appendChild(data);
                        

                        $('#data').append(data);
                    }
                    
                    }else{
                       $('#data').html('<h5 class="text-center">No Record Found..!</h5>');  
                    }
                 
                },errorCB);
            }, errorCB, successCB);
        }
     
function search_address(){
 var address =  $$('#address').val(); 
 fetchData_addresswise(address);
}
function filter_data(filter = 0,search = 0){
var where = 'where 1 = 1';
            var flt = '';
            if(search != '' && search != 0){
                where += ' and';
                
                 where += " "+filter+" like '"+search+"%' ";
                
            }
            var sql = "select DISTINCT "+filter+" as filter ,sr_no,count(*) as total from data_master "+where+" GROUP BY "+filter+" ";
            // alert(filter);
            // alert(sql);
    db.transaction(function(tx){

                tx.executeSql(sql,[],function(tx1,result){
                    var len = result.rows.length;
                    // alert(filter)
                    if(len > 0){
                        $('#data').html('');
                        var  j = 0;
                           for (var i=0; i<len; i++){
                            j++;
                        // var photo = result.rows.item(i).photo;
                        // var photo = 'photo.jpg';
                        var sr_no = result.rows.item(i).sr_no;
                        var filter = result.rows.item(i).filter;
                        // alert(filter);
                        var total = result.rows.item(i).total;
                        // var gender = result.rows.item(i).gender;
                        // var voter_name = result.rows.item(i).voter_name;
                        // var age = result.rows.item(i).age;
// if(!address){
//   // alert('df');
// $('#data').html('<h5 class="text-center">No Record Found..!</h5>'); 
                   
//                       }else{
      var ul = document.getElementById("data");
                          if(filter){

                      var cls = 'row pt-1 pb-0 pl-3 pr-2 filter_click';
              var did = filter;   
              var v = filter;                     

                         }else{
                     var cls = 'row pt-1 pb-0 pl-3 pr-2 filter_click';
              var did = 'Not Mentioned'; 
              var v = 'Not Mentioned';                     



                         }
   var data = '<div  class="'+cls+'" style="border-bottom:groove;    font-size: 15px;"  data-id="'+did+'" ><div class="col p-1 text-center">'+j+'</div><div class="col p-1 text-center">'+v+'</div><div class="col p-1 text-center">'+total+'</div></div>';
   // var data = '<div class="row pt-1 pb-0 pl-3 pr-2 address_click " style="border-bottom:groove;"  data-id="'+address+'" ><div class="col p-1 text-center">'+sr_no+'</div><div class="col p-1 text-center">'+address+'</div><div class="col p-1 text-center">'+total+'</div></div>';
                        // var li = document.createElement("data");
                        // li.appendChild(document.createTextNode(voter_name));
                        // ul.appendChild(data);
                        

                        $('#data').append(data);
// }
}
  
                    
                    
                    }else{
                       $('#data').html('<h5 class="text-center">No Record Found..!</h5>');  
                    }
                 
                },errorCB);
            }, errorCB, successCB);
        }


        function fetchData_addresswise(address = 0){
var where = 'where 1 = 1';
            var flt = '';
            if(address != '' && address != 0){
                where += ' and';
                 where += " address like '"+address+"%' ";
            }
            var sql = "select DISTINCT address,sr_no,count(*) as total from data_master "+where+" GROUP BY address ";
            // alert(sql);
    db.transaction(function(tx){

                tx.executeSql(sql,[],function(tx1,result){
                    var len = result.rows.length;
                    // alert(len)
                    if(len > 0){
                        $('#data').html('');
                        var j = 0;
                           for (var i=0; i<len; i++){
                            j++;
                        // var photo = result.rows.item(i).photo;
                        // var photo = 'photo.jpg';
                        var sr_no = result.rows.item(i).sr_no;
                        var address = result.rows.item(i).address;
                        // alert(address);
                        var total = result.rows.item(i).total;
                        // var gender = result.rows.item(i).gender;
                        // var voter_name = result.rows.item(i).voter_name;
                        // var age = result.rows.item(i).age;
// if(!address){
//   // alert('df');
// $('#data').html('<h5 class="text-center">No Record Found..!</h5>'); 
                   
//                       }else{
      var ul = document.getElementById("data");
                          if(address){

                      var cls = 'row pt-1 pb-0 pl-3 pr-2 address_click';
              var did = address;   
              var v = address;                     

                         }else{
                     var cls = 'row pt-1 pb-0 pl-3 pr-2 address_click';
              var did = 'Not Mentioned'; 
              var v = 'Not Mentioned';                     



                         }
   var data = '<div  class="'+cls+'" style="border-bottom:groove;    font-size: 15px;"  data-id="'+did+'" ><div class="col p-1 text-center">'+j+'</div><div class="col p-1 text-center">'+v+'</div><div class="col p-1 text-center">'+total+'</div></div>';
   // var data = '<div class="row pt-1 pb-0 pl-3 pr-2 address_click " style="border-bottom:groove;"  data-id="'+address+'" ><div class="col p-1 text-center">'+sr_no+'</div><div class="col p-1 text-center">'+address+'</div><div class="col p-1 text-center">'+total+'</div></div>';
                        // var li = document.createElement("data");
                        // li.appendChild(document.createTextNode(voter_name));
                        // ul.appendChild(data);
                        

                        $('#data').append(data);
// }
}
  
                    
                    
                    }else{
                       $('#data').html('<h5 class="text-center">No Record Found..!</h5>');  
                    }
                 
                },errorCB);
            }, errorCB, successCB);
        }

function fetch_data_list(fld = '',flt = 0,votername = 0,last_name = 0,relation_name = 0,card_no = 0,booth_no = 0){
  // alert(fld);
  // alert(flt);
  var where = 'where 1 = 1';
            // var flt = '';
            if(flt != '' && flt != 0){
                where += ' and ';
                if(flt == 'Not Mentioned'){
                 where += " "+fld+" =  '' ";
                }else{
                 where += " "+fld+" =  '"+flt+"' ";

                }
            }
              if(votername != '' && votername != 0){
                where += ' and';
                 where += " voter_name like '"+votername+"%' ";
            }
             if(last_name != '' && last_name != 0){
               where += ' and';
                 where += " surname like '"+last_name+"%' ";
            }
              if(relation_name != '' && relation_name != 0){
               where += ' and';
                 where += " relation_name like '"+relation_name+"%' ";
            }

            if(card_no != '' && card_no != 0){
               where += ' and';
                 where += " card_no like '"+card_no+"%' ";
            }

            if(booth_no != '' && booth_no != 0){
               where += ' and';
                 where += " booth_no like '"+booth_no+"%' ";
            }
            var sql = "select * from data_master "+where+" ";
            // alert(sql);
                    db.transaction(function(tx){

                tx.executeSql(sql,[],function(tx1,result){
                    var len = result.rows.length;
                    if(len > 0){
                      // alert(len);
                        $('#data_list').html('');
                        var j =0;
                           for (var i=0; i<len; i++){
                             j++;
                        // var photo = result.rows.item(i).photo;
                        var photo = 'photo.jpg';
                        var sr_no = result.rows.item(i).sr_no;
                        // alert(sr_no);
                        var house_no = result.rows.item(i).house_no;
                        var mobile = result.rows.item(i).mobile;
                        var gender = result.rows.item(i).gender;
                        var voter_name = result.rows.item(i).voter_name;
                        var age = result.rows.item(i).age;

                        var ul = document.getElementById("data");
                         
   var data = '<div class="row pt-1 pb-0 pl-3 pr-2 " style="border-bottom:groove;"  ><div class="col  p-1 text-center">'+photo+'</div><div class="col p-1 text-center">'+j+'</div><div class="col p-1 text-center">'+house_no+'</div><div class="col p-1 text-center">'+voter_name+'</div><div class="col p-1 text-center">'+gender+'</div><div class="col p-1 text-center">'+age+'</div></div>';
                      
                        // alert(data);

                        $('#data_list').append(data);
                    }
                    
                    }else{
                       $('#data_list').html('<h5 class="text-center">No Record Found..!</h5>');  
                    }
                 
                },errorCB);
            }, errorCB, successCB);
}

function search_castewise(){
 var caste =  $$('#caste').val(); 
 // alert(caste);
 fetchData_castewise(caste);
}



function fetchData_castewise(caste = 0){
  
var where = 'where 1 = 1';
            var flt = '';
            if(caste != '' && caste != 0){
                where += ' and';
                 where += " caste like '"+caste+"%' ";
            }
         

            var sql = "select DISTINCT caste,sr_no,count(*) as total from data_master "+where+" GROUP BY caste ";
            
            // alert(sql);
    db.transaction(function(tx){

                tx.executeSql(sql,[],function(tx1,result){
                    var len = result.rows.length;
                    // alert(len)
                    if(len > 0){
                      // var data = '';
                        $('#data').html('');
                        var j = 0;
                           for (var i=0; i<len; i++){
                   j++;
                        var sr_no = result.rows.item(i).sr_no;
                        var caste = result.rows.item(i).caste;
                        // alert(caste);
                        var total = result.rows.item(i).total;
                
      var ul = document.getElementById("data");
                         var vals = "'"+caste+"'";
                         if(caste){

                      var cls = 'row pt-1 pb-0 pl-3 pr-2 caste_click';
              var did = caste;   
              var v = caste;                     

                         }else{
                        var cls = 'row pt-1 pb-0 pl-3 pr-2 caste_click';
              var did = 'Not Mentioned'; 
              var v = 'Not Mentioned';                     



                         }
   var data = '<div  class="'+cls+'" style="border-bottom:groove;    font-size: 15px;"  data-id="'+did+'" ><div class="col p-1 text-center">'+j+'</div><div class="col p-1 text-center">'+v+'</div><div class="col p-1 text-center">'+total+'</div></div>';
// data += '<div  class="row pt-1 pb-0 pl-3 pr-2 caste_click" style="border-bottom:groove;    font-size: 15px;"  data-id="Not Mentioned" ><div class="col p-1 text-center">'+sr_no+'</div><div class="col p-1 text-center">Not Mentioned</div><div class="col p-1 text-center">'+total+'</div></div>';
                        $('#data').append(data);

}
  
                    
                    
                    }else{
                       $('#data').html('<h5 class="text-center">No Record Found..!</h5>');  
                    }
                 
                },errorCB);
            }, errorCB, successCB);
        }



        function insertData(){

            // Insert record
            db.transaction(insertNote, errorCB, successCB);
            // alert(errorCB);
        }
    


        function insertNote(tx){
            var fname = document.getElementById('fname').value;
            var lname = document.getElementById('lname').value;
            var number = document.getElementById('number').value;
            var userid = document.getElementById('userid').value;
            var pass = document.getElementById('pass').value;
            
            // Insert query
                 
            tx.executeSql("INSERT INTO active_user (fname, lname,mobile,username,password) VALUES (?,?,?,?,?)", [fname,lname,number,userid,pass]);
            
            // Append new list item
            // var ul = document.getElementById("list");
            // var li = document.createElement("li");
            // li.appendChild(document.createTextNode(fname));
            // li.appendChild(document.createTextNode(lname));
            // li.appendChild(document.createTextNode(number));
            // li.appendChild(document.createTextNode(userid));
            // // li.appendChild(document.createTextNode(password));
            // ul.appendChild(li);
        }


     
        function errorCB(err) {
            alert("Error processing SQL: "+err.code);
        }

        function successCB() {
        //    alert("success!");
        }
// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
     $('#myOverlay').show();
    $('#loadingGIF').show();
    setTimeout(function(){ $('#myOverlay').hide();
    $('#loadingGIF').hide(); }, 300);




    var user_id = window.localStorage.getItem('user_id');
    console.log("Device is ready!");
    var user = window.localStorage.getItem("user_id");
    
     // alert(user);
    if(user == 1 ){
                    $$('#home').trigger("click");
    }


      $$(document).on('click', '#sync', function(){  
 window.localStorage.removeItem('user_id');
 location.reload();

})
      $$(document).on('click', '#submitdata', function(){  
         form =$('#candidate_register').serialize();
           $('#myOverlay').show();
    $('#loadingGIF').show();
      $.ajax({  
                url:url+"candidate_register",  
                method:"POST",  
                data:form,  
                dataType:"json",  
                success:function(data)  
                {  
                 if(data.status == 0){
                    myApp.alert(data.message);
                      $('#myOverlay').hide();
    $('#loadingGIF').hide();
                 }else{
                   // alert(data);
                    // myApp.alert(data.all_data);
                    myApp.alert(data.message);
                    // window.location.href = "about.html";
                    insertData();
                    // alert(data.user_id);
                    // insertallData(data.all_data);
                    
                     $.ajax({  
                url:url+"candidate_data/"+data.user_id,  
                method:"POST",  
                data:form,  
                dataType:"json",  
                success:function(data)  
                {  
              db.transaction(
            function(tx) {
                var val = '';
                var k = '';
                var l = data.length;

                     var i=0;
                      
                        $.each(data, function(index, el) {
                            k = '';
                            val = '';
                          for (var key in el) {
                            if (el.hasOwnProperty(key)) {
                                // alert(key+ " "  + el[key]);
                                k +=  key+",";
                                // if(el[key] == ""){
                                //     el[key] = '';
                                // }
                                val += "'"+el[key]+"',";
                            }
                                }
                                if (k[k.length-1] === ",")
                                k = k.slice(0,-1);
                                if (val[val.length-1] === ",")
                                    val = val.slice(0,-1);
                                // alert(val);
                                    // console.log("INSERT INTO data_master ("+k+") VALUES ("+val+")");
                                   tx.executeSql("INSERT INTO data_master ("+k+") VALUES ("+val+")");
                                    $$('#home').trigger("click");
                                    window.localStorage.setItem("user_id", '1');

                          
                        });
                                  
  
            },
            this.txErrorHandler,
          
        );
              db.transaction(function(tx){
 
 tx.executeSql("select * from data_master",[],function(tx,result){
   var len = result.rows.length;
 // alert(len);
   for (var i=0; i<len; i++){
    var note = result.rows.item(i).note;
   }
 
 },errorCB);
}, errorCB, successCB);


                }  
           })  


                    
                      $('#myOverlay').hide();
    $('#loadingGIF').hide();
                    // location.reload();
                    // $$('#home').trigger("click");


                 }  
                }  
           })  
    });

});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})
myApp.onPageInit('namewise', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {

    // myApp.alert('Here comes About page');
        // Following code will be executed for page with data-page attribute equal to "about"
   
//    var dict = {
//   "Home": {
//     pt: "Início"
//   },
//   "Download plugin": {
//     pt: "Descarregar plugin",
//     en: "Download plugin"
//   }
// }

// var translator = $('body').translate({lang: "pt", t: dict}); //use English
// myApp.alert(translator);
// translator.lang("pt"); //change to Portuguese

    }
})
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'namewise') {


    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    // myApp.alert('Here comes About page');
})
$$(document).on('pageInit', '.page[data-page="namewise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
  setTimeout(function(){ 
    fetchData(); }, 300);
    

      

    
    //myApp.alert(d);
      
})
$$(document).on('pageInit', '.page[data-page="alphabeticalwise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
  setTimeout(function(){ 
    fetchData('alpha'); }, 300);
    

      
})
$$(document).on('pageInit', '.page[data-page="agewise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
  setTimeout(function(){ 
    fetchData(); }, 300);
    

      
})

$$(document).on('pageInit', '.page[data-page="addresswise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
       $$(document).on("click", ".address_click", function(){
        // var name  = $$(this).attr("data-name");
        var select_address = $$(this).attr("data-id");
        // alert(select_address);
        // app.router.navigate("URL?name=" + name + "&id=" + id);
         window.localStorage.removeItem('select_caste');
         window.localStorage.removeItem('select_address');
         window.localStorage.removeItem('filter');
         window.localStorage.removeItem('data_type');
 
 


 window.localStorage.setItem("select_address", select_address);
                    $$('#data_link').trigger("click");

})
  setTimeout(function(){ 
    fetchData_addresswise(); }, 300);
    

      
})
$$(document).on('pageInit', '.page[data-page="castewise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
  setTimeout(function(){ 
    fetchData_castewise(); }, 300);

  $$(document).on("click", ".caste_click", function(){
        // var name  = $$(this).attr("data-name");
        var select_caste = $$(this).attr("data-id");
        // alert(select_caste);
        // app.router.navigate("URL?name=" + name + "&id=" + id);
     window.localStorage.removeItem('select_caste');
         window.localStorage.removeItem('select_address');
         window.localStorage.removeItem('filter');
         window.localStorage.removeItem('data_type');
 


 window.localStorage.setItem("select_caste", select_caste);
                    $$('#data_link').trigger("click");

});
    

      
})
$$(document).on('pageInit', '.page[data-page="datalist"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
     var caste = window.localStorage.getItem('select_caste');
     var address = window.localStorage.getItem('select_address');
     var filter = window.localStorage.getItem('filter');
     var data_type = window.localStorage.getItem('data_type');
// alert(caste);
     if(caste ){
      // alert('dd');


   str = caste.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});


      $('#tittle').html(str);
     $('#data_type').val('caste');
       setTimeout(function(){ 
    fetch_data_list('caste',caste); }, 300);
     }else if(address){
     // $('#data_type').val();
       str = address.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
 $('#tittle').html(str);
     $('#data_type').val('address');
       setTimeout(function(){ 
    fetch_data_list('address',address); }, 300);
     }else if(filter){
       str = filter.toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
});
 $('#tittle').html(str);
     $('#data_type').val(data_type);
       setTimeout(function(){ 
    fetch_data_list(data_type,filter); }, 300);
     }
     // alert(caste);

    

      
})

$$(document).on('pageInit', '.page[data-page="nagarwise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
       $$(document).on("click", ".filter_click", function(){
        // var name  = $$(this).attr("data-name");
        var filter = $$(this).attr("data-id");
        // alert(select_address);
        // app.router.navigate("URL?name=" + name + "&id=" + id);
         window.localStorage.removeItem('select_caste');
         window.localStorage.removeItem('select_address');
         window.localStorage.removeItem('filter');
         window.localStorage.removeItem('data_type');
 
 


 window.localStorage.setItem("filter", filter);
 window.localStorage.setItem("data_type",'bibhag');

                    $$('#data_link').trigger("click");

})
  setTimeout(function(){ 
    filter_data('bibhag',0); }, 300);
    

      
})



$$(document).on('pageInit', '.page[data-page="societywise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
       $$(document).on("click", ".filter_click", function(){
        // var name  = $$(this).attr("data-name");
        var filter = $$(this).attr("data-id");
        // alert(select_address);
        // app.router.navigate("URL?name=" + name + "&id=" + id);
         window.localStorage.removeItem('select_caste');
         window.localStorage.removeItem('select_address');
         window.localStorage.removeItem('filter');
         window.localStorage.removeItem('data_type');
 
 


 window.localStorage.setItem("filter", filter);
 window.localStorage.setItem("data_type",'society');
 

                    $$('#data_link').trigger("click");

})
  setTimeout(function(){ 
    filter_data('society',0); }, 300);
    

      
})
$$(document).on('pageInit', '.page[data-page="boothwise"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
     //myApp.alert('Here comes About page');
       $$(document).on("click", ".filter_click", function(){
        // var name  = $$(this).attr("data-name");
        var filter = $$(this).attr("data-id");
        // alert(select_address);
        // app.router.navigate("URL?name=" + name + "&id=" + id);
         window.localStorage.removeItem('select_caste');
         window.localStorage.removeItem('select_address');
         window.localStorage.removeItem('filter');
         window.localStorage.removeItem('data_type');
 
 


 window.localStorage.setItem("filter", filter);
 window.localStorage.setItem("data_type",'booth_no');
 

                    $$('#data_link').trigger("click");

})
  setTimeout(function(){ 
    filter_data('booth_no',0); }, 300);
    

      
})



