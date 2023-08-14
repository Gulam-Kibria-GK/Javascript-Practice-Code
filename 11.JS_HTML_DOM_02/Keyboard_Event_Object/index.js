// KeyboardEvent Object
// 1. Keydown - pressing a key, can repeat
// 2. keypress (may not supported by some browsers)
// 3. keyup
// some properties - key, keyCode, code, shiftKey, ctrlKey, repeat

const textarea = document.querySelector("textarea");
textarea.addEventListener("keydown", function (e) {
  console.log("keydown");
    if (e.repeat) {
    alert("do not repeat");
  }
});


textarea.addEventListener("keypress", function () {
  console.log("keypress");
});
textarea.addEventListener("keyup", function (e) {
   console.log("keydown");
  // console.log(e.keyCode);
  // console.log(e.Code);
  // console.log(e.shiftKey);
  // console.log(e.shiftKey);
  // console.log(e.ctrlKey);

    if (e.shiftKey) {
    console.log("shift+" + e.key);
  }
});