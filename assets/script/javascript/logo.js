$(document).ready(function(){
  //Typed js function to type the strings
  $(function() {
    $("#hello").typed({
      strings: ["<p>Teenagers and Drugs</p>^1000<p>Have you ever thought how deep this issue is?<p>\
      ^1000<p>Teens are...</p>^1000<span id = \"logo\"></span>"],
      typeSpeed: 5,

      callback: function() {
        $(".typed-cursor").remove(); //removing cursor
        $("#logo").typed({
          strings: ["Addicted", "Dealing", "and...", "Dying", "Here is all you need to know..."],
          typeSpeed: 20,

          callback: function(){
            $(".typed-cursor").remove(); //removing cursor

            //Click the developer button and the div disappears
            $("#logo").click(removeHome);
            setTimeout(removeHome, 2000);
          }
        });
      }
    });
  }
)
});

function removeHome() {
  $("body").css("overflow", "auto");
  $("#canvas-row").slideUp("slow", function() {
    $("#nav").addClass("navbar-fixed-top");
    $("#canvas-row").remove();
  });
}
