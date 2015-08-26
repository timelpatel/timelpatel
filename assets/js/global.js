/*
  timelpatel.com
  global.js
*/

/* nav */
$( "#navmob" ).click (function() {
    event.preventDefault();
    toggleMenu();
});

$( "#nav a" ).click (function() {
    toggleMenu();
});

function toggleMenu() {
    $( "#nav" ).slideToggle('fast');
    $( "#navmob" ).toggleClass( "on" );
};