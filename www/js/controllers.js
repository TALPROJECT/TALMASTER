angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
   
    var dash=this;
    var currentlist=[];
    


})

.controller('ChatsCtrl', function($scope, Chats, $state) {
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
  $scope.account = function(){
    $state.go('tab.account');
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, ListLibrary, SongLibrary) {
 
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.lists = ListLibrary.all();
  $scope.chansons = SongLibrary.all();

  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
  
  /* $scope.generateList= function(list){
    var res =[];

    for (var i = list.length - 1; i >= 0; i--) {
      res[i]=chansons[lists.content[]i];
    }
    return res;
  }; */

})
.controller('ListDetailCtrl', function($scope, $stateParams, ListLibrary, SongLibrary) {
  $scope.chansons=SongLibrary.all();
  $stateParams.list = ListLibrary.get($stateParams.listId);
  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
})
.controller('AccountCtrl', function($scope, Chats, Profil) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.profils = Profil.all();
  
})
.controller('FavoritesCtrl', function($scope, $state) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.account = function(){
    $state.go('tab.account');
  };
});
