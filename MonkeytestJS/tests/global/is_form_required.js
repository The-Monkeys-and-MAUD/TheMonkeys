registerTest ('Is form required', function () {
  this
    .test("Is form required", function( $ ) {
      ok(true, "form is required");
      $('form').submit();
    })
    .wait(function() {
        
        // This will be called repeatedly until it returns true, killing the wait
        // (hopefully long before the 10 seconds is up)
        return true;

    }, 10000) // wait max 10 seconds ( Pause execution of tests per duration )
});
