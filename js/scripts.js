$(document).ready(function() {
  const age = parseInt(prompt("Enter your age"));

  if (age > 18) {
    $('#vote-info').show();
  } else if (age === 18) {
    $('#of-age').show();
  } else {
    $('#under-18').show();
  }
});