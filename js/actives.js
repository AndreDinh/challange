$(function() {
    $('input:checkbox').on('change', function() {
        $(this).parent("li").toggleClass('stroked');
        // $(this).parent("li").unwrap("<s>");
    });
});

// var strike = $( "s" );
// $( "input:checkbox" ).on('change', function(){
//   if ( strike.parent("li").is("s")) {
//     strike.unwrap();
//   } else {
//     strike.wrap( "<s>" );
//   }
// });

// find s then unwrap or wrap input

// if parent("li").find("s")
