angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('LoginCtrl', function($scope) {

})

  .controller('PlaylistsCtrl', function($scope) {

  })

.controller('BrowseCtrl', function($scope, $http) {
  $scope.data = "Loading...";
  $http.get("http://bernardsboe-ridgehigh.ss5.sharpschool.com/cms/One.aspx?portalId=3097189&pageId=5762386").then(function(response) {
        var myDiv = $("<div></div>").html(response.data);
        var content = myDiv.find("#news_content_body");
        window.content = myDiv.find("#news_content_body");
        if (content = myDiv.has("img")) {
          content = content.find("img").prop("outerHTML");
        }
        else {
          content = content.text();
        }
        $scope.data = content;
  }, function() {
        $scope.data = "An error has occured or there are no announcements today";
  });
});
