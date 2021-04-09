// Call say("Hi!") to have your computer say hi!
// This only works on recent versions of Safari
// and Chrome at the moment.
function say(text) {
    var msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);  
  }
  
$("#greet").on('click', function() {
say("hello" + $("#name").val())
});

