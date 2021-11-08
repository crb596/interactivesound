//Use jquery on mouse over
$( "#wolf" ).mouseover(function() {
  $("#wolfAudio").trigger("play");
  $("#wolf").attr("src","images/wolftalking.png");
});
$( "#wolf" ).mouseout(function() {
  $("#wolfAudio").trigger("pause");
  $("#wolf").attr("src","images/wolf.png");
});
$( "#lion" ).mouseover(function() {
  $("#lionAudio").trigger("play");
  $("#lion").attr("src","images/liontalking.png");
});
$( "#lion" ).mouseout(function() {
  $("#lionAudio").trigger("pause");
  $("#lion").attr("src","images/lion.png");
});
$( "#seal" ).mouseover(function() {
  $("#sealAudio").trigger("play");
  $("#seal").attr("src","images/sealtalking.png");
});
$( "#seal" ).mouseout(function() {
  $("#sealAudio").trigger("pause");
  $("#seal").attr("src","images/seal.png");
});
$( "#monkey" ).mouseover(function() {
  $("#monkeyAudio").trigger("play");
  $("#monkey").attr("src","images/monkeytalking.png");
});
$( "#monkey" ).mouseout(function() {
  $("#monkeyAudio").trigger("pause");
  $("#monkey").attr("src","images/monkey.png");
});

function start(){
  $("#text").show();
  $("#welcome").hide();
}