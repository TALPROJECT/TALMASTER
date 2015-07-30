

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.services' is found in services.js
  // 'starter.controllers' is found in controllers.js
  angular.module('starter', ['ionic', 'starter.controllers', 'starter.services','starter.directives','ngAnimate'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {


      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)

    $ionicPlatform.on("resume",function(){
          User.checkSession().then(function(hasSession) {
          if (!hasSession){ $state.go('connexion');}
          else{$state.go('tab.dash');}
        });
    })
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'TabCtrl'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'DashCtrl'
        }
      }
    })

    .state('tab.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
    .state('tab.newfriend', {
        url: '/newfriend',
        views: {
          'tab-chats': {
            templateUrl: 'templates/newfriend.html',
            controller: 'NewFriendCtrl'
          }
        }
      })
     .state('tab.allfriend', {
        url: '/allfriend',
        views: {
          'tab-chats': {
            templateUrl: 'templates/allfriend.html',
            controller: 'AllFriendCtrl'
          }
        }
      })
      .state('tab.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })
  .state('tab.list-detail', {
        url: '/lists/:listId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/list-detail.html',
            controller: 'ListDetailCtrl'
          }
        }
      })
  .state('tab.account', {
      url: '/account',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    })

  .state('connexion', {
      url: '/',
      templateUrl: 'templates/connexion.html',
      controller: 'ConnexionCtrl'
    })

  .state('policy', {
      url: '/policy',
      templateUrl: 'templates/policy-page.html',
      controller: 'PolicyCtrl'
    })

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

  .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    })
    .state('tab.favorites', {
      url: '/favorites',
      views: {
        'tab-favorites': {
          templateUrl: 'templates/tab-favorites.html',
          controller: 'FavoritesCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

  });
