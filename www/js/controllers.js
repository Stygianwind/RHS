angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location, $cordovaInAppBrowser, $ionicFilterBar) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  $scope.$on('$ionicView.enter', function(e) {
    $scope.shouldShowSearchBar = $location.path() === '/app/search';
    console.log($scope.shouldShowSearchBar, $location.path());
  });
  $scope.openLogin =
    function() {
      var options = {
        location: 'yes',
        clearcache: 'yes',
        toolbar: 'yes'
      };



      $cordovaInAppBrowser.open('https://hac.spihost.com/HomeAccess3.1/Account/LogOn?ReturnUrl=%2fHomeAccess3.1%3fSiteCode%3dbtslive&SiteCode=btslive', '_blank', options)

        .then(function(event) {
          // success
          console.debug(event);
        })

        .catch(function(event) {
          // error
          console.debug(event+"ERORORIOURIOR");
        });
    };
$scope.$on('init', function(evt, data) {
  $scope.data = data;
});
  $scope.showFilterBar = function () {
    var filterBarInstance = $ionicFilterBar.show({
      items: $scope.data,
      update: function (filteredItems) {
        $scope.data = filteredItems;
        $scope.$broadcast("updateData", filteredItems);
      },
      filterProperties: 'FullName'
    });
  };





})

.controller('LoginCtrl', function($scope, $cordovaInAppBrowser, $ionicPlatform) {
 // $ionicPlatform.ready(function() {


  }
  //)}
)

  .controller('PlaylistsCtrl', function($scope) {

  })

.controller('BrowseCtrl', function($scope, $http ) {
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
})

  .controller('DirectoryCtrl', function($scope, $http, $cordovaInAppBrowser, $rootScope, $ionicLoading) {

    //$scope.data = "Loading...";
    $ionicLoading.show();
    $http({
        method: 'POST',
        url: "http://ridgehigh.bernardsboe.com/Common/controls/StaffDirectory/ws/StaffDirectoryWS.asmx/GetUsersProfile",
        data: {
          "ptlInstanceId": "784617",
          "groupIds": ["14089579"],
          "pageIndex": 0,
          "criteria": {
            "PageSize": "300",
            "SortName": "first_names,last_name",
            "IsAscending": true,
            "QueryCriteria": [{"Name": "Name", "Value": ""}]
          }
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }).then(function(response) {

        $scope.data = response.data.d.Result.StaffProfileList;
      }, function() {
        $scope.data = {"d":{"Result":{"__type":"BasicStaffProfileList","StaffProfileList":[{"Properties":null,"UserId":14089585,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Alexander Ballas","FirstName":"Alexander","LastName":"Ballas","Email":"aballas@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/12739738"},{"Properties":null,"UserId":14089685,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Catherine  Beers","FirstName":"Catherine ","LastName":"Beers","Email":"CBeers@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/11205590"},{"Properties":null,"UserId":26783773,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Bonnie Brunskill","FirstName":"Bonnie","LastName":"Brunskill","Email":"bbrunskill@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/13421619"},{"Properties":null,"UserId":5531389,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Carrie Capozzi","FirstName":"Carrie","LastName":"Capozzi","Email":"ccapozzi@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/11063764"},{"Properties":null,"UserId":5999021,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Barbara  Dwyer","FirstName":"Barbara ","LastName":"Dwyer","Email":"bdwyer@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/476739"},{"Properties":null,"UserId":14089698,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Cassandra Ehlbeck","FirstName":"Cassandra","LastName":"Ehlbeck","Email":"CEhlbeck@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/11050145"},{"Properties":null,"UserId":14089635,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Barbara Erickson","FirstName":"Barbara","LastName":"Erickson","Email":"berickson@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/308466"},{"Properties":null,"UserId":14089704,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Carla Falb","FirstName":"Carla","LastName":"Falb","Email":"cfalb@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/308329"},{"Properties":null,"UserId":14089712,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Chad Gillikin","FirstName":"Chad","LastName":"Gillikin","Email":"cgillikin@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/489625"},{"Properties":null,"UserId":14089591,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Allison Greer","FirstName":"Allison","LastName":"Greer","Email":"agreer@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/11502854"},{"Properties":null,"UserId":14089716,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Chad Griffiths","FirstName":"Chad","LastName":"Griffiths","Email":"CGriffiths@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/24627"},{"Properties":null,"UserId":14089595,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Ardyth Grossmann","FirstName":"Ardyth","LastName":"Grossmann","Email":"agrossmann@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":""},{"Properties":null,"UserId":14089599,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Ashley Harris","FirstName":"Ashley","LastName":"Harris","Email":"AHarris@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/13157185"},{"Properties":null,"UserId":14089609,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Amy Lieberwirth","FirstName":"Amy","LastName":"Lieberwirth","Email":"ALieberwirth@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/11230058"},{"Properties":null,"UserId":14089605,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Aimee Mitchell","FirstName":"Aimee","LastName":"Mitchell","Email":"AimeeMitchell@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/436960"},{"Properties":null,"UserId":14089653,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Bruce Morozko","FirstName":"Bruce","LastName":"Morozko","Email":"bmorozko@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/308190"},{"Properties":null,"UserId":14089657,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Barbara Retzko","FirstName":"Barbara","LastName":"Retzko","Email":"bretzko@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/308428"},{"Properties":null,"UserId":14089665,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Brian Scott","FirstName":"Brian","LastName":"Scott","Email":"BScott@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/308493"},{"Properties":null,"UserId":14089619,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Ann Sobine","FirstName":"Ann","LastName":"Sobine","Email":"asobine@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":""},{"Properties":null,"UserId":14089623,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Ann Suter","FirstName":"Ann","LastName":"Suter","Email":"asuter@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/489661"},{"Properties":null,"UserId":14089673,"ProfileImage":"/common/resources/shared/images/DefaultDisplayPic.gif","Name":"Bill Tracy","FirstName":"Bill","LastName":"Tracy","Email":"BTracy@bernardsboe.com","Position":"","Phone":"","PersonalWebsite":"https://app.oncoursesystems.com/school/webpage/10861188"}],"Total":215,"EmailPrivacy":false},"IsSuccessful":true,"Message":""}}
          .d.Result.StaffProfileList;

        //$scope.data = "An error has occurred or there are no announcements today";
      }).then(function() {
      for (n in $scope.data) {
        var i = $scope.data[n];
        i.FullName = i.FirstName + " " + i.LastName;
      }
      $scope.$emit("init", $scope.data);
      $ionicLoading.hide();
    })


    $scope.$on("updateData", function(evt, data) {
      $scope.data = data;
    });


    $scope.openURL =
      function(url) {
        var options = {
          location: 'yes',
          clearcache: 'yes',
          toolbar: 'yes'
        };



        $cordovaInAppBrowser.open(url, '_blank', options)

          .then(function(event) {
            // success
            console.debug(event);
          })

          .catch(function(event) {
            // error
            console.debug(event+"ERORORIOURIOR");
          });
      };


    });
