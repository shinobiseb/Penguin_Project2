
$('#youtubeId').keyup(function() {
  delay(function() {
    var videoID = $('#youtubeId').val();
    var videos = "https://www.googleapis.com/youtube/v3/videos";
    var apiKey = "AIzaSyAzYHm1iwMocB9pW2uZrz_6Sqte5t_bXGo"; // Insert here your api key
    var fieldsTitle = "fields=items(snippet(title))";
    var fieldsEmpty = "";
    var part = "part=snippet";

    function getUrl(fields) {
      var url = videos + "?" + "key=" + apiKey + "&" + "id=" + videoID + "&" + fields + "&" + part;
      return url;
    }

    $.get(getUrl(fieldsEmpty), function(response) {
      var status = response.pageInfo.totalResults;
      var title;
      if (status) {
        $.get(getUrl(fieldsTitle), function(response) {
          title = response.items[0].snippet.title;
          $('#info').text(title);
          var url = "https://www.youtube.com/embed/" + videoID;
          $('#myIframe').attr('src', url)
        })
      } else {
        title = "Video doesn't exist";
        $('#info').text(title);
        $('#myIframe').attr('src', "");
      }
    });
  }, 1000);
});
