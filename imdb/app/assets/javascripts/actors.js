(function(){
  $("#getactors").on('click', function(){
      $.ajax({
        url: "/actor",
        dataType: "JSON",
        success:function(data)
          $("#actorspace").html(data.actor)
      });
  });
});
