// throws an error as at that moment playMusic is not defined
// playMusic();
startEngine();

// a regular function definition
var playMusic = function(value) {
    console.log("inside playMusic");
};

var stopPlaying = function(value) {
    console.log("inside stopPlaying");
};

playMusic();
stopPlaying();

// a function definition using the declaration notation
function startEngine(value) {
    console.log('inside startEngine');
}

// Functions declarations are not part of the regular top-to-bottom
// flow of control. They are conceptually moved to the top of their
// scope and can be used by all the code in that scope.

// This is useful because it give us the freedom to order code in a
// way that seems meaningful, without worrying about having to
// define all functions above their use.