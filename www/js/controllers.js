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

    $scope.inList = function(string, list){
      var result = false;
      for(i=0; i<list.length; i++){
        if(list[i].name == string){
            result = true;
        }
      }
    return result;
    }

    $scope.currentList=[{
    name : "titre0",
    artist :"",
    face :"http://www.dschool.fr/wp-content/uploads/2015/06/EliottJabes.jpg" 
    },{ 
    name:  "plus",
    artist:"",
    face :"img/plus.png",
  
    }];

    $scope.swapIndexes = function (array, index1, index2){
      var tempArray = array;
      array[index1]=tempArray[index2];
      array[index2]=tempArray[index1];
    };

    $scope.addNewSong=function(newSong){
      if( !($scope.inList(newSong, $scope.currentList) || $scope.currentList.length>11)){
        $scope.currentList.splice($scope.currentList.length-1, 0,{
          name : newSong,
          artist : 'Artist of' + newSong,
          face :"https://static9.viadeo-static.com/servlet/photo?memberId=0021nmwfnm67e5l1&height=185&width=140&ts=1416406120000"});
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

  $scope.imageClass=['','','','','','','','','','','','','','']; // va servir à l'affichage de l'image blurred

  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
  $scope.selectedIndex = -1; 

  $scope.itemClicked = function ($index) {
    console.log($index);
    $scope.selectedIndex = $index;
  };
  

  $scope.refreshBlurring= function(index){
    if ($scope.imageClass[index]=='my-class'){
      $scope.imageClass=['','','','','','','','','','','','','',''];

    }

    else {
    $scope.imageClass=['','','','','','','','','','','','','',''];
    $scope.imageClass[index]='my-class';
    }

  };


  $scope.playSong = function(song) {
    if ($scope.media.src===song.preview_url && $scope.isPlaying){
      $scope.media.pause();
      $scope.isPlaying = false;
    }

    else{
      $scope.media.src = song.preview_url;
      $scope.media.play();
      $scope.isPlaying = true;
    }

  };
 
  /*$scope.playSong = function(song) {
    $scope.defer = $q.defer();
    $scope.media = new Audio(song.preview_url);

    $scope.media.addEventListener("loadeddata", function(){
       $scope.defer.resolve();
     });

  $scope.media.play();
  return $scope.defer.promise;
}   NE MARCHE PAS, DOIT-ON METTRE $SCOPE POUR TOUTES LES VAR DEFINIES ICI ?*/

  $scope.isPlaying=false;
  $scope.media = document.createElement('audio');
  
  $scope.playSong = function(song) {
    if ($scope.media.src===song.preview_url && $scope.isPlaying){
      $scope.media.pause();
      $scope.isPlaying = false;
      return null;
    }

    else{
      $scope.media.src = song.preview_url;
      $scope.media.play();
      $scope.isPlaying = true;

    }

  };


  $scope.stopSong = function() {
    $scope.media.pause();
    $scope.isPlaying = false;
  };
  /*$scope.audio.addEventListener('ended', function() {
    $scope.$apply(function() {
      $scope.stopSong()
    });
  });*/


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
