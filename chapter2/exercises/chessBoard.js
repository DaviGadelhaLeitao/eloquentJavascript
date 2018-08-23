function getChessBoard(height, width) {
  var plan = "";
  for (var i = 1; i <= width; i++) {
    for (var x = 1; x <= height; x++) {
      if ((x + i) % 2 === 0) {
        plan = plan + " ";
      } else {
        plan = plan + "x";
      }
    }
    plan += "\n";
  }
  return plan;
}
console.log(getChessBoard(8, 8));
