$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var videos = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/videos.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();
      tollnums =  videos.data;
      tollnums.forEach(element => { 
      listgrp.innerHTML+=
      `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
      <div class="d-flex w-100 justify-content-between">
            <h5><b>${element.name}</b></h5>
        </div>
      <br>
      <p class="nb-1"><i class="fas fa-link" style="margin-right: 15px;"> </i>   ${element.link}</p>
      
      
      </div>`;
      });   
    document.querySelector('.nb-1')
         .addEventListener('click',()=> {
            
             window.location.href='http://hmfw.ap.gov.in/audios/carona_video1.mp4';
             
         });

       

         
});