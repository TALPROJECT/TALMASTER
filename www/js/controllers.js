angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $localStorage) {
   
 $localStorage.setObject('userFavoriteArray', []);

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

.controller('ConnexionCtrl', function($scope, $state,$timeout) {
  $scope.openLogin=function(){
           $timeout(function() {
      // $timeout to allow animation to complete
      $state.go('login');
    }, 750);

  }
  $scope.openRegister=function(){
    $state.go('register');
  }
})
.controller('LoginCtrl', function($scope,User, $stateParams, $localStorage,$location) {
  $scope.connect=function(user){
    console.log(user);
 
    $localStorage.setObject('user',user);               
                 // $ionicLoading.hide();
                 console.log("here");
                  $location.path('/tab/dash');

}
})
.controller('RegisterCtrl', function($scope, User, $stateParams, $localStorage,$location) {
  $scope.regularConnect=function(user){
    console.log(user);
 
             $localStorage.setObject('user',user);               
                 // $ionicLoading.hide();
                 console.log("here");
                  $location.path('/tab/dash');

}
})
.controller('ChatsCtrl', function($scope, Chats, $state, $ionicModal) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 $scope.selectedCounter = 0;


  $scope.change = function (item) {
        if (item.selected) {
            $scope.selectedCounter++
        } else {
            $scope.selectedCounter--
        }
    };

  $scope.counterPositive=function(){
    if($scope.selectedCounter == 0){
      return false;
    }
    else{
      return true;
    }
  };
   $scope.counterMoreOne=function(){
    if($scope.selectedCounter == 1){
      return true;
    }
    else{
      return false;
    }
  };
 $scope.orderProp = 'name'
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

for (var i = $scope.chats.length - 1; i >= 0; i--) {
  $scope.chats[i].friendClicked=false;
};

  $scope.clickFriend=function($index){
    if ($scope.chats[$index].friendClicked){
      $scope.chats[$index].friendClicked=false;
    }

    else{
     $scope.chats[$index].friendClicked=true;
    }
  }

  $ionicModal.fromTemplateUrl('templates/newfriend.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };
$ionicModal.fromTemplateUrl('templates/allfriend.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal1 = modal
  })  

  $scope.openModal1 = function() {
    $scope.modal1.show();
  }

  $scope.closeModal1 = function() {
    $scope.modal1.hide();
  };
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
})
.controller('NewFriendCtrl', function($scope, Chats, $state) {
  })
.controller('NewFriendCtrl', function($scope, Chats, $state) {
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

.controller('ListDetailCtrl', function($scope, $stateParams, ListLibrary, SongLibrary, $ionicHistory, $window, $localStorage) {
  $scope.chansons=SongLibrary.all();
  $stateParams.list = ListLibrary.get($stateParams.listId);
  $scope.myFavorites=$localStorage.getObject('userFavoriteArray');

  $scope.imageClass=['','','','','','','','','','','','','','']; // va servir à l'affichage de l'image blurred

  $scope.remove = function(list) {
    ListLibrary.remove(list);
  };
  $scope.selectedIndex = -1; 

  $scope.itemClicked = function ($index) {
    console.log($index);
    $scope.selectedIndex = $index;
  };

  $scope.containSong = function(arrayOfSongs, song){
    for (var i = arrayOfSongs.length - 1; i >= 0; i--) {
      if(arrayOfSongs[i].id == song.id){
        return true;
      }
    }
    return false;
  }

  $scope.addSongToFavorites = function(song){
    $scope.myFavorites = $localStorage.getObject('userFavoriteArray');
    if (!$scope.containSong($scope.myFavorites, song)){
      $localStorage.addElement('userFavoriteArray',song);
      $scope.myFavorites=$localStorage.getObject('userFavoriteArray');
    }
  };

  $scope.removeSongFromFavorites = function(song){
    $localStorage.removeElement('userFavoriteArray', song);
    $scope.myFavorites=$localStorage.getObject('userFavoriteArray');
  };

  $scope.goBack = function(){
    console.log('ici');

    $scope.media.pause();
    $ionicHistory.goBack();
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
.controller('FavoritesCtrl', function($scope, User, Chats, Profil, $state, SongLibrary,$window,$ionicModal, $localStorage) {

  $scope.myFavorites = $localStorage.getObject('userFavoriteArray');
  
  $scope.refreshFavorites = function(){
     $scope.myFavorites = $localStorage.getObject('userFavoriteArray'); 
   };
 
  
  $scope.settings = {
    enableFriends: true
  };
  $scope.settings = {
    enableFriends: true
  };
  $scope.profils = Profil.all();
  $scope.showEdit = false;
  $scope.editNameClick = function(){
    $scope.showEdit = true;
  };
  $scope.logout=function(){
    User.destroySession();
     $scope.modal.hide();
    $state.go('connexion');
  }
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
$ionicModal.fromTemplateUrl('templates/tab-account.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function() {
    $scope.modal.show();
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });


  $scope.openSong=function(song){
    $window.open(song.open_url,"_system",'location=yes');
  };
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
})
.controller('TabCtrl', function($scope, $localStorage){
  $scope.enteringFavorites=function(){
  $scope.myFavorites = $localStorage.getObject('userFavoriteArray');
  }
});
