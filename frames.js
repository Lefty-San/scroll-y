function getData(callback) {
    var jsonUrl = "./data/frames.json";

    $.getJSON(jsonUrl)
    .done(
            function(response, textStatus) {
                callback.call(this, response);
            })
            .fail(
                    function(jqxhr, settings, exception) {
                        console.log(exception);
                    });
}

$( document ).ready(function(){
	getData(function(picObj){
		buildFrames(picObj);	
	});
});


function buildFrames(picObj) {
	console.log(picObj["store"].length);
	
	var frames = "";
	var len = picObj["store"].length;
		for (var x = 0; x < len ; x++) {
			frames += '<div class="frame '+ x +'">';
		var cell = setCells(picObj,x);
		frames += cell + '</div>';
		}
	
	$('body').append(frames);
}

function setCells(picObj,x) {
	var cell = "";
	for(var y = 0; y < picObj["store"][x][x].length; y++) {

				if ( x == 0) {
					cell += '<div class="cell"'+
						'style="background:url(./images/' + x + '/pic0' + y + '.jpg) no-repeat fixed;'+
						'background-size:100%;background-size: 100% 600px;background-position: top left;">'+
						'</div>';
				$('.frame.' + x).append(cell);
				$('.frame').append("cell");
				}
				if ( x == 1) {
					cell += '<div class="cell"'+
						'style="background:url(./images/' + x + '/pic0' + y + '.jpg) no-repeat fixed;'+
						'background-size:100%;background-size: 100% 600px;background-position: left;">'+
						'</div>';
				$('.frame.' + x).append(cell);
				$('.frame').append("cell");
				}
				if (x == 2) {
					cell += '<div class="cell"'+
						'style="background:url(./images/' + x + '/pic0' + y + '.jpg) no-repeat fixed;'+
						'background-size:100%;background-size: 100% 600px;background-position: bottom left;">'+
						'</div>';
				$('.frame.' + x).append(cell);
				$('.frame').append("cell");
				}
				
			}
			return cell;
}
