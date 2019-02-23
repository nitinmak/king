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
        function start_search(){
          var votername =  $$('#voter_name').val();
          var last_name =  $$('#last_name').val();
          var relation_name =  $$('#relation_name').val();
          var card_no =  $$('#card_no').val();
          var booth_no =  $$('#booth_no').val();
         
          fetchData(votername,last_name,relation_name,card_no,booth_no);
        }


         function fetchData(votername = 0,last_name = 0,relation_name = 0,card_no = 0,booth_no = 0){
            // alert(votername);
            var where = 'where 1 = 1';
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
            // alert(where);
            db.transaction(function(tx){
// alert('select * from data_master '+where+' ');
               
                tx.executeSql("select * from data_master "+where+" ",[],function(tx1,result){
                    var len = result.rows.length;
                    if(len > 0){
                        $('#data').html('');
                           for (var i=0; i<len; i++){
                        // var photo = result.rows.item(i).photo;
                        var photo = 'photo.jpg';
                        var sr_no = result.rows.item(i).sr_no;
                        var house_no = result.rows.item(i).house_no;
                        var mobile = result.rows.item(i).mobile;
                        var gender = result.rows.item(i).gender;
                        var voter_name = result.rows.item(i).voter_name;
                        var age = result.rows.item(i).age;

                        var ul = document.getElementById("data");
                         
   var data = '<div class="row pt-1 pb-0 pl-3 pr-2 " style="border-bottom:groove;"  ><div class="col  p-1 text-center">'+photo+'</div><div class="col p-1 text-center">'+sr_no+'</div><div class="col p-1 text-center">'+house_no+'</div><div class="col p-1 text-cente">'+voter_name+'</div><div class="col p-1 text-center">'+gender+'</div><div class="col p-1 text-center">'+age+'</div></div>';
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


        db.transaction(function(tx){
                //var sql = "INSERT INTO data_mddaster (user_id,constituency_id,pc_name,ac_name,mnc,zp,pc,gp,part_no,ward_no,booth_no,booth_name,sr_no,photo,voter_name,mobile_no,relation_name,surname,relation_type,gender,age,house_no,epic_id,card_no,address,village_name,booth_address,society,bibhag,old_town,caste,support,blood_group,education,occupation,birth_date,marriage_date,email,adhar,ration_card,dead,lastModified user_id,constituency_id  , pc_name  , ac_name  , mnc  , zp  , pc  , gp  , part_no  , ward_no  , booth_no  , booth_name  , sr_no  , photo  , voter_name  , mobile_no  , relation_name  , surname  , relation_type  , gender  , age  , house_no  , epic_id  , card_no  , address  , village_name  , booth_address  , society  , bibhag  , old_town  , caste  , support  , blood_group  , education  , occupation  , birth_date  , marriage_date  , email  , adhar  , ration_card  , dead  , lastModified  ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?),[10,7,,DSDSDS,,,,,,fdfd,123456,fghf,1,ffdfd,ghjghjkg ghjghjgj,78945612,fghfjgh,ytuyiu,yuiyuio,Male,25,4,451278,45785689,fghf fhgfj gfhfghg ghj,Lajpor,Surat,Siddhigiri,pal,nanpura,hindu,,A,BCA,,30/11/1995,,,,,,2019-02-20 08:22:1010,7,,DSDSDS,,,,,,fdfd,123456,fghf,2,ffdfd,ghjghjkg ghjghjgj,78945612,fghfjgh,ytuyiu,yuiyuio,Male,25,4,451278,45785689,fghf fhgfj gfhfghg ghj,Lajpor,Surat,Siddhigiri,pal,nanpura,hindu,,A,BCA,,30/11/1995,,,,,,2019-02-20 08:22:10]";
        //        tx.executeSql(sql);
// tx.executeSql("INSERT INTO data_master (user_id,constituency_id,pc_name,ac_name,mnc,zp,pc,gp,part_no,ward_no,booth_no,booth_name,sr_no,photo,voter_name,mobile_no,relation_name,surname,relation_type,gender,age,house_no,epic_id,card_no,address,village_name,booth_address,society,bibhag,old_town,caste,support,blood_group,education,occupation,birth_date,marriage_date,email,adhar,ration_card,dead,lastModified)VALUES(1,2,'3s','dIVY',1,2,'DDD','nnn',0,1,1,'GFGF',10,'GGG','GFG',8347496266,'FDFGDFD','FDFDFD','FDFDF','male',10,15,31,'FDFD','','','FDFD','','','','','','','','','','','','','','','')");
   // tx.executeSql("INSERT INTO data_master (user_id,constituency_id,pc_name,ac_name,mnc,zp,pc,gp,part_no,ward_no,booth_no,booth_name,sr_no,photo,voter_name,mobile_no,relation_name,surname,relation_type,gender,age,house_no,epic_id,card_no,address,village_name,booth_address,society,bibhag,old_town,caste,support,blood_group,education,occupation,birth_date,marriage_date,email,adhar,ration_card,dead,lastModified) VALUES ('10','7','gfdrew','DSDSDS','wq','wwqw','wqw','wqq','wq','wfdfd','123456','fghf','2','ffdfd','ghjghjkg ghjghjgj','78945612','fghfjgh','ytuyiu','yuiyuio','Male','25','4','451278','45785689','fghf fhgfj gfhfghg ghj','Lajpor','Surat','Siddhigiri','pal','nanpura','hindu','wq','wqA','BCA','wq','30/11/1995','wq','wq','wqfdzX','dewds','dsdsa','2019-02-20 08:22:10')");
                 tx.executeSql("select * from data_master",[],function(tx1,result){
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
    if(user == 1 ){
                    $$('#home').trigger("click");
    }


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


            // var dataas = JSON.stringify(data);
                   
//                    alert(data);
//                   $.each(data.all_data, function(key, item){ 

//                          // var html = '<tr><td>'+key +'</td><td>'+item.user_name+'</td><td>'+item.kill+'</td><td>'+item.winn_prize+'</td></tr>' ; 
//                          alert(item.user_id);
//                          alert(item.constituency_id);
// //tx.executeSql("INSERT INTO data_master (user_id,constituency_id ,pc_name ,ac_name ,mnc ,zp ,pc ,gp ,part_no ,ward_no ,booth_no ,booth_name ,sr_no ,photo ,voter_name ,mobile_no ,relation_name ,surname ,relation_type ,gender ,age ,house_no ,epic_id ,card_no ,address ,village_name ,booth_address ,society ,bibhag ,old_town  ,caste ,support ,blood_group ,education ,occupation ,birth_date ,marriage_date ,email ,adhar ,ration_card ,dead ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [item.user_id,item.constituency_id ,item.pc_name ,item.ac_name ,item.mnc ,item.zp ,item.pc ,item.gp ,item.part_no ,item.ward_no ,item.booth_no ,item.booth_name ,item.sr_no ,item.photo ,item.voter_name ,item.mobile_no ,item.relation_name ,item.surname ,item.relation_type ,item.gender ,item.age ,item.house_no ,item.epic_id ,item.card_no ,item.address ,item.village_name ,item.booth_address ,item.society ,item.bibhag ,item.old_town  ,item.caste ,item.support ,item.blood_group ,item.education ,item.occupation ,item.birth_date ,item.marriage_date ,item.email ,item.adhar ,item.ration_card ,item.dead]);
//                              // $('#chicken').append(html);
//                           });
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

    fetchData();

      

    
    //myApp.alert(d);
      
})