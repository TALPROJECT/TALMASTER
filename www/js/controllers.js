angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, ListLibrary) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.lists=ListLibrary.all();
  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
  

})
.controller('ListDetailCtrl', function($scope, ListLibrary, SongLibrary) {
  $scope.chansons=SongLibrary.all();
  $scope.lists = ListLibrary.all();
  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
  

})
.controller('FavoritesCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});