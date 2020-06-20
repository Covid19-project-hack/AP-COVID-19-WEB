$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var tollfree = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/tollfree_numbers.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    tollnums =  tollfree.data;
    tollnums.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    
    
    <p class="mb-1"><i class="fas fa-map-marker-alt" style="margin-right: 15px;"> </i>   ${element.district}</p>
    <p class="mb-1"><i class="fas fa-phone-alt" style="margin-right: 15px;"> </i>   ${element.phone_number}</p>
    </div>`;
    });   
});