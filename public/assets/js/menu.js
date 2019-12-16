$(document).ready(function() {
    $(".devour").on("click", function(event) {
      event.preventDefault();

      var id = $(this).children(".id").val();
      console.log(id);

      $.ajax({
        method: "PUT",
        url: "/menu/update/" + id,
      }).then(
          function(){
          console.log("devoured");
          location.reload()
        });
    });
});