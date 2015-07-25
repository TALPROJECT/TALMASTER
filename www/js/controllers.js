angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state) {
   
    $scope.inArray= function(string, array){
      var result = false;
      for(i=0; i<array.length; i++){
        if(array[i] == string){
            result = true;
        }
      }
    return result;
    }

    $scope.currentList=["titre0", "titre1"];

    $scope.addNewSong=function(newSong){
      if( !$scope.inArray(newSong, $scope.currentList) || $scope.currentList.length>11){
        $scope.currentList.push(newSong);
      }
    };

$scope.account = function(){
    $state.go('tab.account');
  };
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

  /* $scope.playSong = function(song) {
    $scope.defer = $q.defer();
    $scope.media = new Audio(song.preview_url);

    $scope.media.addEventListener("loadeddata", function(){
       $scope.defer.resolve();
     });

  $scope.media.play();
  return $scope.defer.promise;
}   NE MARCHE PAS, DOIT-ON METTRE $SCOPE POUR TOUTES LES VAR DEFINIES ICI ?*/

})
.controller('AccountCtrl', function($scope, Chats, Profil) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.profils = Profil.all();
  $scope.showEdit = false;
  $scope.editNameClick = function(){
    $scope.showEdit = true;
  };
  $scope.addNewName=function(myName){
      
        $scope.profils.name=myName;
        $scope.showEdit = false;
      
    };
  $scope.showEditFav = false;
  $scope.editFavClick = function(){
    $scope.showEditFav = true;
  };
  $scope.addNewFav=function(myFav){
      
        $scope.profils.FavoritedSong=myFav;
        $scope.showEditFav = false;
      
    };
})
.controller('FavoritesCtrl', function($scope, $state) {
  $scope.settings = {
    enableFriends: true
  };
  $scope.account = function(){
    $state.go('tab.account');
  };
});
