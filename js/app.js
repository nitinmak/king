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



var db = window.openDatabase("tutorialdb", "1.0", "tutorial database", 1000000); //will create database tutorialdb or open it
        document.addEventListener("deviceready", onDeviceReady, false);
        
        function onDeviceReady() {

            // Create Table
            db.transaction(populateDB, errorCB, successCB);

            // Select records
            // fetchData();
        }

        function populateDB(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS data_master (data_id INTEGER PRIMARY KEY AUTOINCREMENT,user_id INTEGER NOT NULL,constituency_id INTEGER NOT NULL,pc_name TEXT,ac_name TEXT,mnc TEXT,zp TEXT,pc TEXT,gp TEXT,part_no TEXT,ward_no TEXT,booth_no TEXT,booth_name TEXT,sr_no TEXT,photo TEXT,voter_name TEXT,mobile_no TEXT,relation_name TEXT,surname TEXT,relation_type TEXT,gender TEXT,age TEXT,house_no TEXT,epic_id TEXT,card_no TEXT,address TEXT,village_name TEXT,booth_address TEXT,society TEXT,bibhag TEXT,old_town TEXT ,caste TEXT,support TEXT,blood_group TEXT,education TEXT,occupation TEXT,birth_date TEXT,marriage_date TEXT,email TEXT,adhar TEXT,ration_card TEXT,dead TEXT )');
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
         function fetchData(){
            db.transaction(function(tx){
                
                tx.executeSql("select * from candidate",[],function(tx1,result){
                    var len = result.rows.length;
                    
                    for (var i=0; i<len; i++){
                        var fname = result.rows.item(i).fname;

                        var ul = document.getElementById("list");
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(fname));
                        ul.appendChild(li);
                    }
                    
                },errorCB);
            }, errorCB, successCB);
        }
     
        function insertData(){

            // Insert record
            db.transaction(insertNote, errorCB, successCB);
        }
        function insertallData(data){

            // Insert record
            db.transaction(insertmysqldata(data), errorCB, successCB);
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


        function insertmysqldata(tx,data){
alert(data);
            // var fname = document.getElementById('fname').value;
            // var lname = document.getElementById('lname').value;
            // var number = document.getElementById('number').value;
            // var userid = document.getElementById('userid').value;
            // var pass = document.getElementById('pass').value;
    //          $.ajax({  
    //             url:url+"candidate_register",  
    //             method:"POST",  
    //             data:form,  
    //             dataType:"json",  
    //             success:function(data)  
    //             {  
    //                 alert(data);
    // //              if(data.status == 0){
    // //                 myApp.alert(data.message);
    // //                   $('#myOverlay').hide();
    // // $('#loadingGIF').hide   ();
    // //              }else{
                   
    // //                 myApp.alert(data.message);
    // //                 // window.location.href = "about.html";
    // //                 insertData();
    // //                 insertallData();
    // //                   $('#myOverlay').hide();
    // // $('#loadingGIF').hide();
    // //                 location.reload();
    // //                 // $$('#home').trigger("click");


    // //              }  
    //             }  
    //        })  
            // Insert query
             // tx.executeSql("select * from data_master ",[],function(tx1,result){
             //        var len = result.rows.length;
             //          for (var i=0; i<len; i++){
                       
                        // var user_id =  result.rows.item(i).user_id; 
                        // var constituency_id = result.rows.item(i).constituency_id; 
                        // var pc_name = result.rows.item(i).pc_name; 
                        // var ac_name = result.rows.item(i).ac_name; 
                        // var mnc = result.rows.item(i).mnc; 
                        // var zp = result.rows.item(i).zp; 
                        // var pc = result.rows.item(i).pc; 
                        // var gp = result.rows.item(i).gp; 
                        // var part_no = result.rows.item(i).part_no; 
                        // var ward_no = result.rows.item(i).ward_no; 
                        // var booth_no = result.rows.item(i).booth_no; 
                        // var booth_name = result.rows.item(i).booth_name; 
                        // var sr_no = result.rows.item(i).sr_no; 
                        // var photo = result.rows.item(i).photo; 
                        // var voter_name = result.rows.item(i).voter_name ;
                        // var mobile_no = result.rows.item(i).mobile_no; 
                        // var relation_name = result.rows.item(i).relation_name; 
                        // var surname = result.rows.item(i).surname; 
                        // var relation_type = result.rows.item(i).relation_type; 
                        // var gender = result.rows.item(i).gender; 
                        // var age = result.rows.item(i).age; 
                        // var house_no = result.rows.item(i).house_no; 
                        // var epic_id = result.rows.item(i).epic_id ;
                        // var card_no = result.rows.item(i).card_no;
                        // var address = result.rows.item(i).address ;
                        // var village_name = result.rows.item(i).village_name ;
                        // var booth_address = result.rows.item(i).booth_address; 
                        // var society = result.rows.item(i).society ;
                        // var bibhag = result.rows.item(i).bibhag ;
                        // var old_town = result.rows.item(i).old_town;
                        // var caste = result.rows.item(i).caste ;
                        // var support = result.rows.item(i).support; 
                        // var blood_group = result.rows.item(i).blood_group; 
                        // var education = result.rows.item(i).education ;
                        // var occupation = result.rows.item(i).occupation ;
                        // var birth_date = result.rows.item(i).birth_date ;
                        // var marriage_date = result.rows.item(i).marriage_date; 
                        // var email = result.rows.item(i).email ;
                        // var adhar = result.rows.item(i).adhar ;
                        // var ration_card = result.rows.item(i).ration_card ;
                        // var dead = result.rows.item(i).dead ;
                        

                     

                        // Add list item
                        
            // tx.executeSql("INSERT INTO data_master (user_id,constituency_id ,pc_name ,ac_name ,mnc ,zp ,pc ,gp ,part_no ,ward_no ,booth_no ,booth_name ,sr_no ,photo ,voter_name ,mobile_no ,relation_name ,surname ,relation_type ,gender ,age ,house_no ,epic_id ,card_no ,address ,village_name ,booth_address ,society ,bibhag ,old_town  ,caste ,support ,blood_group ,education ,occupation ,birth_date ,marriage_date ,email ,adhar ,ration_card ,dead ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [user_id,constituency_id ,pc_name ,ac_name ,mnc ,zp ,pc ,gp ,part_no ,ward_no ,booth_no ,booth_name ,sr_no ,photo ,voter_name ,mobile_no ,relation_name ,surname ,relation_type ,gender ,age ,house_no ,epic_id ,card_no ,address ,village_name ,booth_address ,society ,bibhag ,old_town  ,caste ,support ,blood_group ,education ,occupation ,birth_date ,marriage_date ,email ,adhar ,ration_card ,dead]);
                    
            //   },errorCB);
            // }, errorCB, successCB);
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
    $('#loadingGIF').hide(); }, 8000);


        db.transaction(function(tx){
                
                 tx.executeSql("select * from active_user",[],function(tx1,result){
                    var len = result.rows.length;
                    // alert(len);
                   if(len > 0){
                    window.localStorage.setItem("user_id", '1');
                   }else{
                     window.localStorage.setItem("user_id", '0');
                    
                   }
                    
                    
                },errorCB);
            }, errorCB, successCB);


    var user_id = window.localStorage.getItem('user_id');
    console.log("Device is ready!");
    var user = window.localStorage.getItem("user_id");
    
     // alert(user);
    // if(user == 1 ){
    //     // window.location.href = "about.html";
                   
    // // window.location.href = "index.html";

    //                 $$('#home').trigger("click");
    // }

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
    $('#loadingGIF').hide   ();
                 }else{
                   // alert(data);
                    // myApp.alert(data.all_data);
                    // myApp.alert(data.message);
                    // window.location.href = "about.html";
                    insertData();
                   insertallData(data.all_data);
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
    fetchData();
    //myApp.alert(d);
      
})