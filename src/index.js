import './assets/common.less';
import './assets/index.less';
import domtoimage from 'dom-to-image';

var node = document.getElementById('Content');

var button = document.getElementById('Button');

$('.j_Addbtn').on('click', function() {
  var text = $('.j_InputText').val();
  $('#Content').append('<p class="title j_Title'+count+'">'+text+'</p>');
});

button.onclick = function() {
  domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        $('.j_Resultimage').append(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    domtoimage.toBlob(node)
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
};