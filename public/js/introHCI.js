// 'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
  initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Page ready");
 	initCamera();
 	initGestures();
 	initRSVPForm();
}

// init jQuery gestures  
function initGestures() {
	$(function () {
		$(".judge-img").bind("taphold", tapholdHandler);
		
		function tapholdHandler(event){
			var targetIDPrefix = event.target.id;
			console.log("Got prefix: " + targetIDPrefix);
			$("#" + targetIDPrefix + "-bio").show();
        }
    });
}

// init RSVP form submit listener
function initRSVPForm() {
  $("#rsvpForm").submit(function (e) {
	  e.preventDefault();
	  console.log("Submitting form...");
	  var rsvpEmail = $("#rsvpEmail").val();
	  $.post('addRSVP', {rsvpEmail: rsvpEmail}, postCallback);
  });
  
  function postCallback(res) {
	  alert("RSVP form successfully submitted!");
	  $("#rsvpEmail").val('');
  }
}