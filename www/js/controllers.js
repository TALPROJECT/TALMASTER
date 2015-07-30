  angular.module('starter.controllers', [])

  .controller('DashCtrl', function($scope, $state, $localStorage, SongLibrary) {
     
   $localStorage.setObject('userFavoriteArray', []);
   $scope.chansons = SongLibrary.all();
    
   // ****** Fonctions recyclées depuis le list-detail ****

    $scope.imageClass=['','','','','','','','','','','','','',''];
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

   // ****** Fonctions auxiliaires ****

      $scope.inArray= function(string, array){
        var result = false;
        for(i=0; i<array.length; i++){
          if(array[i] == string){
              result = true;
          }
        }
      return result;
      }

      $scope.inList = function(id, list){
        var result = false;
        for(i=0; i<list.length; i++){
          if(list[i].id == id){
              result = true;
          }
        }
      return result;
      }

      $scope.currentList=[];

      $scope.swapIndexes = function (array, index1, index2){
        var tempArray = array;
        array[index1]=tempArray[index2];
        array[index2]=tempArray[index1];
      }

      // ****** Fonctions d'ajout d'une chanson à la liste courante ****

      $scope.addNewSong=function(id){
        if( !($scope.inList(id, $scope.currentList) || $scope.currentList.length>10)){
          
          songToAdd= $scope.chansons[id];
          $scope.currentList.splice($scope.currentList.length, 0,{
            id : id,
            name : songToAdd.name,
            artist : songToAdd.artist,
            preview_url : songToAdd.preview_url,
            face: songToAdd.face});
        }
      }

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
  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats, ListLibrary, SongLibrary,$ionicHistory) {
   
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
    $scope.goBack = function(){
      console.log('ici');
      $ionicHistory.goBack();
    };

  })

  .controller('ListDetailCtrl', function($scope, $stateParams, ListLibrary, SongLibrary, $ionicHistory, $window, $localStorage, $rootScope) {
    $scope.chansons=SongLibrary.all();
    $stateParams.list = ListLibrary.get($stateParams.listId);
    
    $rootScope.myFavorites=$localStorage.getObject('userFavoriteArray');

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
      $rootScope.myFavorites = $localStorage.getObject('userFavoriteArray');
      if (!$scope.containSong($rootScope.myFavorites, song)){
        $localStorage.addElement('userFavoriteArray',song);
        $rootScope.myFavorites=$localStorage.getObject('userFavoriteArray');
      }
    };

    $scope.removeSongFromFavorites = function(song){
      $localStorage.removeElement('userFavoriteArray', song);
      $rootScope.myFavorites=$localStorage.getObject('userFavoriteArray');
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

  .controller('AccountCtrl', function($scope, Chats, Profil,$state) {
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
    $scope.goPolicy=function(){
    $state.go('policy');
  }
  })
  .controller('FavoritesCtrl', function($scope, User, Chats, Profil, $state, SongLibrary,$window,$ionicModal, $localStorage, $rootScope) {

    $rootScope.myFavorites = $localStorage.getObject('userFavoriteArray');
    
    $scope.shouldShowDelete = false;

    $scope.data = {
    showDelete: false
  };
    // $scope.refreshFavorites = function(){
    //   $rootScope.myFavorites = $localStorage.getObject('userFavoriteArray'); 
    //  };
   
    
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

    $scope.removeSong = function(index) {
      $rootScope.myFavorites.splice(index, 1);
    };

    $scope.openSong=function(song){
      $window.open(song.open_url,"_system");
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
  $scope.goPolicy=function(){
    $state.go('policy');
  }
})
.controller('TabCtrl', function($scope, $localStorage){
  $scope.enteringFavorites=function(){
  $scope.myFavorites = $localStorage.getObject('userFavoriteArray');
  }
})
.controller('PolicyCtrl', function($scope,$ionicHistory){
  $scope.goBack = function(){
      console.log('ici');
      $ionicHistory.goBack();
    };
});


