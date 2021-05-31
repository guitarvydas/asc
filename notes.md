# emitted JS for leaf Hello
function hello () {
  return {
    initialize: function () { },
    handle: function (e) {
      if (e.tag === "r") {
        hello.greet ();
      } else {
        abort ("hello");
      }
  }
}
