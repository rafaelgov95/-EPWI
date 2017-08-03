(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


  $('.modal').modal({
      // dismissible: true, // Modal can be dismissed by clicking outside of the modal
      // opacity: .5, // Opacity of modal background
      // inDuration: 300, // Transition in duration
      // outDuration: 200, // Transition out duration
      // startingTop: '4%', // Starting top style attribute
      // endingTop: '10%', // Ending top style attribute
      // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      //   alert("Ready");
      //   console.log(modal, trigger);
      // },
      // complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
    
    //   $('.modal').modal({
    //     // dismissible: true, // Modal can be dismissed by clicking outside of the modal
    //     // opacity: .5, // Opacity of modal background
    //     // inDuration: 300, // Transition in duration
    //     // outDuration: 200, // Transition out duration
    //     // startingTop: '4%', // Starting top style attribute
    //     // endingTop: '10%', // Ending top style attribute
    //     // ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    //     //   alert("Ready");
    //     //   console.log(modal, trigger);
    //     // },
    //     // complete: function() { alert('Closed'); } // Callback for Modal close
    //   }
    // );
  	$('.datepicker').pickadate({
			selectMonths: true, // Creates a dropdown to control month
			selectYears: 200 // Creates a dropdown of 15 years to control year
    });
    
    Materialize.toast('', 4000) // 4000 is the duration of the toast

  $('.tap-target').tapTarget('open');
  $('.tap-target').tapTarget('close');
        