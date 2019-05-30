$(document).ready(function(){
    // $('select').selectstyle({
    //     width  : 400,
    //     height : 300,
    //     theme  : 'light',
    //     onchange : function(val){}
    // });
    // console.log('ll');
    // $("#country").select2( {
    //     placeholder: "Select Country",
    //     allowClear: true
    //     } );
    $(`#listData`).hide();
  $(`#station_select`).on('change',function(){
    var selectedValue = $(`#station_select option:selected`).text();
    if( selectedValue == 'Select Station...'){

    }else {
        console.log(selectedValue);
        // $(`#listData`).show();
    }
  })
});
    /////////////// Police Station select
function selectStation(){
    $(`#counterPage`).hide();
    $(`#station_select`).show();
}
//////// take a photo

function takePhoto(){
    $(`#counterPage`).hide();
    $(`#take_photo`).show();
}
var videoId = 'video1';
var scaleFactor = 0.25;
var snapshots = [];
function capture1(video, scaleFactor) {
    if(scaleFactor == null){
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
    canvas.setAttribute("id", "canvasId1");
        canvas.width  = w;
        canvas.height = h;
    var ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}
function takeShoot(){
    var video  = document.getElementById(videoId);
    var output = document.getElementById('output1');
    var canvas = capture1(video, scaleFactor);

        canvas.onclick = function(){
            window.open(this.toDataURL());
        };

    snapshots.unshift(canvas);
    output.innerHTML = '';
    // $("#output").remove();
    for(var i=0; i<4; i++){

        output.appendChild(snapshots[i]);
        // console.log($("#output")[0].childNodes);
      if(i == 0){
    //    console.log(i)
    }else if(i == 1){
        // console.log();
        $("#output1")[0].childNodes[1].style.display = 'none';
        // var list = document.getElementById("output");
        //   list.removeChild(list.childNodes[1]);
    }else if(i >3){
        // console.log('test')
    }
    }
}