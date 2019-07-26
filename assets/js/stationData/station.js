$(document).ready(function(){

    ///////////// for Station listing from JSON File
    $.getJSON('/Kpbot_ui_new/assets/json/Sheet.json',function(data){
        console.log(data);
        $.each(data, function(key, value) {
            // console.log(key);
            // console.log(value);
            $('#station_selectBox')
                .append($("<option></option>")
                           .attr("value",value.location)
                           .text(value.location)); 
       });
            $(`#listData`).hide();
            $(`#station_selectBox`).on('change',function(){
                var selectedValue = $(`#station_selectBox option:selected`).text();
                // console.log(selectedValue)
                if( selectedValue == 'Select Station...'){
                    $(`#stationData`).html("<ol id='listData'><li id='liData'></li>\
                    </ol>");
                }else {
                    $(`#listData`).show();
                    const seletedData =[];
                    let k;
                    for(k=0; k < data.length; k++){
                        // console.log(data[k].location)
                        if(data[k].location === selectedValue){
                            // console.log(selectedValue)
                            // console.log(data[k].location);
                            $(`#stationData`).html("<ol id='listData'><li id='liData'>"+data[k].info1+"</li>\
                                </ol>");
                                // if(data[k].info1 == ''){
                                //     $(`#stationData`).html("NO DATA");
                                // }
                        }else {
                        // console.log('No DATA')
                        }
                    }
                }
            });
    });

   
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