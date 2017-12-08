import './assets/common.less';
import './assets/index.less';
import domtoimage from 'dom-to-image';

var node = document.getElementById('Content');

var button = document.getElementById('Button');

$('.j_Addbtn').on('click', function() {
  var text = $('.j_InputText').val();
  $('#Content').append('<p class="title j_Title'+count+'">'+text+'</p>');
});

$('.j_InputColor').on('input', function() {
  var color = $('.j_InputColor').val();
  $(node).css('backgroundColor', color);
});

$('.j_InputTitleColor').on('input', function() {
  var color = $('.j_InputTitleColor').val();
  $('.j_Title').css('color', color);
});

$('.j_InputDescColor').on('input', function() {
  var color = $('.j_InputDescColor').val();
  $('.j_Desc').css('color', color);
});

$('.j_InputTitle').on('input', function() {
  var text = $('.j_InputTitle').val();
  if ($(node).find('.j_Title').length) {
    $(node).find('.j_Title').text(text);
  } else {
    $(node).append('<p class="title j_Title">'+text+'</p>');
  }
});

$('.j_InputDesc').on('input', function() {
  var text = $('.j_InputDesc').val();
  if ($(node).find('.j_Desc').length) {
    $(node).find('.j_Desc').text(text);
  } else {
    $(node).append('<p class="desc j_Desc">'+text+'</p>');
  }
});


button.onclick = function() {
  domtoimage.toPng(node)
    .then(function (dataUrl) {
      var img = new Image();
      img.src = dataUrl;
    //   $('.j_Resultimage').append(img);
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
    domtoimage.toBlob(node)
    .then(function (blob) {
      window.saveAs(blob, 'my-node.png');
    });
};