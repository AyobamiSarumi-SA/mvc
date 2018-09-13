/* OJO OLUWASEUN JOSEPH */

$(function(){
  $('#submit-me').submit(function(){

   url = $ (this).attr('action');
   data = $ (this).serialize();

   $.post(url, data, function(response){
     alert(response);
   });

    return false;

  });
});