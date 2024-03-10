function addComment() {
    let username = $("#username").val();
    let commentText = $("#comment").val();
  
    if (username && commentText) {
      let comment = '<div class="comment"> <i id="icon" class="fa-regular fa-circle-user"></i>' 
      +'<div class="column">'+ '<div class="row">' + username + '<div class="buttons">' + '<button class="edit" onclick="editComment(this)">Edit</button>' +
      '<button class="delete" onclick="deleteComment(this)">Delete</button>' + '</div>' + '</div>' + '<div class="comment-text">' + commentText + '</div>' + '<div class="edit-text"></div>' + '</div>' + '</div>';
  
      $("#comments").prepend(comment);
  
      // Clear input fields
      $("#username").val('');
      $("#comment").val('');
    };
};

function deleteComment(btn) {
    $(btn).parents('.comment').remove();
};

function editComment(btn) {
    let commentDiv = $(btn).parents('.column').children('.edit-text');
    let commentText = commentDiv.text().replace('EditDelete', '');
    let commentPrevText = $(btn).parents('.row').next().text()

    // Replace the comment div with an editable input field
    let editInput = '<input class="edit-input" type="text" value="' + commentText + commentPrevText.trim() + '">' +
                    '<button onclick="saveEdit(this)">Submit</button>'
    commentDiv.html(editInput);
};

function saveEdit(btn) {
    let editedText = $(btn).prev().val();
    let commentDiv = $(btn).parent().prev();

    // Replace the input field with the updated comment
    commentDiv.html(editedText);

    $(btn).prev().remove();
    $(btn).remove();
};


// Test
$('#username').val('TheMan');
$('#comment').val('Hard to argue with that🤔');

$('#submit').click();


$('#username').val('Guest1234');
$('#comment').val(`Why would I change your mind? Its the fastest growing industry out there...`);

$('#submit').click();


$('#username').val('EnoughSaid');
$('#comment').val('Preach!');

$('#submit').click();


$('#username').val('asdf');
$('#comment').val('💰');

$('#submit').click();