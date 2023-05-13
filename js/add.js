
var randomja = ["グー", "チョキ", "パー"];

$("button").on("click", function () {
window.setTimeout(dispMsg, 3100);
function dispMsg(){
  location.reload();
}
});

$(".gu").on("click", function () {
  var random = Math.floor(Math.random() * randomja.length);
  $("h2").html(randomja[random]);
  $("h3").show();

  if (random === 0) {
    $("h3").html("あいこ");
  } else if (random === 1) {
    $("h3").html("勝ち");
  } else if (random === 2) {
    $("h3").html("負け");
  }
});

$(".choki").on("click", function () {
  var random = Math.floor(Math.random() * randomja.length);
  $("h2").html(randomja[random]);
  $("h3").show();

  if (random === 0) {
    $("h3").html("負け");
  } else if (random === 1) {
    $("h3").html("あいこ");
  } else if (random === 2) {
    $("h3").html("勝ち");
  }
});

$(".pa").on("click", function () {
  var random = Math.floor(Math.random() * randomja.length);
  $("h2").html(randomja[random]);
  $("h3").show();

  if (random === 0) {
    $("h3").html("勝ち");
  } else if (random === 1) {
    $("h3").html("負け");
  } else if (random === 2) {
    $("h3").html("あいこ");
  }
});
