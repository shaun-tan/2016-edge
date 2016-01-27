(function(){
  $("#getactors").on('click', function(){
      $.ajax({
        url: "/actor",
        success:function(data)
          $("#actorspace").html(data.actor)
      });
  });
});
