var main = function () {
    var toDos = [];

    $(".tabs a span").toArray().forEach(function (element) {
        var $element = $(element);

        // create a click handler for this element
        $element.on("click", function () {
            var $content,
                $input,
                $button,
                i;

            $(".tabs a span").removeClass("active");
            $element.addClass("active");
            $("main .content").empty();

            if ($element.parent().is(":nth-child(1)")) {
                // newest first, so we have to go through
                // the array backwards
                $content = $("<ul>");
                for (i = toDos.length-1; i >= 0; i--) {
                    $content.append($("<li>").text(toDos[i]));
                }
            } else if ($element.parent().is(":nth-child(2)")) {
                // oldest first, so we go through the array forwards
                $content = $("<ul>");
                toDos.forEach(function (todo) {
                    $content.append($("<li>").text(todo));
                });
            } else if ($element.parent().is(":nth-child(3)")) {
                // input a new to-do
                $input = $("<input>"),
                $button = $("<button>").text("+");

                $button.on("click", function () {
                    if ($input.val() !== "") {
                        toDos.push($input.val());
                        $input.val("");
                    }
                });

                $content = $("<div>").append($input).append($button);
               /* Alternatively append() allows multiple arguments so the above
                can be done with $content = $("<div>").append($input, $button); */
            }

            $("main .content").append($content);

            return false;
        });
    });

    $(".tabs a:first-child span").trigger("click");
};

$(document).ready(main);






/* menyra e gjate, per rreshtat    
$(".tabs a:nth-child(1)").on("click", function () {
 // make all the tabs inactive
 $(".tabs span").removeClass("active");
 // make the first tab active
 $(".tabs a:nth-child(1) span").addClass("active");
 // empty the main content so we can recreate it
 $("main .content").empty();
 // return false so we don't follow the link
 return false;
 });
 $(".tabs a:nth-child(2)").on("click", function () {
 $(".tabs span").removeClass("active");
 $(".tabs a:nth-child(2) span").addClass("active");
 $("main .content").empty();
 return false;
 });
 $(".tabs a:nth-child(3)").on("click", function () {
 $(".tabs span").removeClass("active");
 $(".tabs a:nth-child(3) span").addClass("active");
 $("main .content").empty();
 return false;
 });
*/
/*menyre mw e shkuter
var tabAktiv= function(numriTabit){
  var zgjidhtab=".tabs a:nth-child(" + numriTabit + ") span";
 $(".tabs span").removeClass("active");
 $(zgjidhtab).addClass("active");
 $("main .content").empty();

};

$(".tabs a:nth-child(1)").on("click", function (){
	tabAktiv(1);
	return false;
});

$(".tabs a:nth-child(2)").on("click", function (){
	tabAktiv(2);
	return false;
});

$(".tabs a:nth-child(3)").on("click", function (){
    tabAktiv(3);
	return false;
}); */

//me ane te for
/* var tabNumber;
 for (tabNumber = 1; tabNumber <= 3; tabNumber++) {
 var tabSelector = ".tabs a:nth-child(" + tabNumber + ") span";
 $(tabSelector).on("click", function (event) {
 $(".tabs span").removeClass("active");
 $(event.target).addClass("active");
 $("main.content").empty();
 return false;
 });
 }  */

