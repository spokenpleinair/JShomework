// Add jQuery code that fades in the text "I am a hidden secret" whenever the button is clicked.
// Change your jQuery code so it slides down the text instead of fading it in.
// Change the button text to say "Click me to toggle a hidden secret!" and make the text toggle between fading in and out each time it is clicked.


$("#clicker").on('click', function() {
$('#secret').fadeIn();
});


$("#clicker2").on('click', function() {
$('#secret2').slideDown();
}); 

$("#clicker3").on('click', function() {
$('#secret3').toggle().fadeIn();
});

