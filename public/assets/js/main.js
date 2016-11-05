$(document).on('click', 'h3', function(){

  $('#results').empty();

  var articleID = $(this).attr('data-id');


  $.ajax({
    method: "GET",
    url: "/articles/" + articleID,
  })

    .done( function(data) {

      $('#results').append('<h2>' + data.title + '</h2>');

      $('#results').append('<input id="titleinput" name="title" >');

      $('#results').append('<textarea id="bodyinput" name="body"></textarea>');

      $('#results').append('<button data-id="' + data._id + '" id="savenote">Save</button>');

      if(data.comment){
        console.log(data.comment);

      $('#results').append('<button data-id="' + data.comment._id + '" id="deletenote">Delete Note</button>');

        $('#titleinput').val(data.comment.title);

        $('#bodyinput').val(data.comment.body);
      }
    });
});
