$(document).ready(function(){
 	//alert(' jq ok');
 	
    $.ajax({
        url: "https://rawgit.com/obrienke1/web_application_development/master/jsonp.js", //jQuery adds 'callback='
        jsonpCallback: 'showSeasons',
        dataType: "jsonp",
    	success: function( response ) {
            //console.log( response ); // server response
            var $newContent = '';
            $newContent += '<h2>Seasons</h2>';
            $newContent += '<ul>';
            for(i =0;i<response.seasons.length;i++){
            $newContent += '<li><a href=\"#\">' + response.seasons[i].season + '</a></li>';	
            }
            $newContent += '</ul>';
            $('#content').html($newContent);
        }
    });
 })







