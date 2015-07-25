angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Eliott Jabès',
    lastList: 'Sunset in Da Morning',
    face: 'http://www.dschool.fr/wp-content/uploads/2015/06/EliottJabes.jpg',
    email: 'eliototo@gmail.com'
  }, {
    id: 1,
    name: 'Alexandre Attia',
    lastList: 'Sunshine in Da Evening',
    face: 'https://media.licdn.com/media/AAEAAQAAAAAAAAKyAAAAJGU4ODY2YWYxLThiMjktNGMxYS1iMWY5LTE1NmJmMTI3ZDIxOQ.jpg',
    email: 'alexandre.attia@wanadoo.fr'
  }, {
    id: 2,
    name: 'Le Krull',
    lastList: 'Doucement le matin ...',
    face: 'http://www.unmondeailleurs.net/wp-content/uploads/antillais_guadeloupe.jpg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };

})
.factory('Profil', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var profils = {
    name: 'Anthony Tuil',
    FavoritedSong: 'Kuar',
    face: 'https://pbs.twimg.com/profile_images/575685384375422977/QI0yLbfx.jpeg',
    email: 'antholhuileux@gmail.com'
  };
    return {
    all: function() {
      return profils;
    }
  };
})


.factory('SongLibrary', function(){

var chansons =[{
    id: 0,
    name: 'Never Too Much',
    artist: 'Luther Vandroos',
    preview_url : 'https://p.scdn.co/mp3-preview/7a5b4002971319e124244094428c94ebe66bccf1',
    open_url : 'http://open.spotify.com/track/3nFJbZCHP4d9vduKjJLdBL',
    face: 'http://services.insidetameside.com/radio/vis/artists/Luther%20Vandross/Never%20too%20much.png'
  }, {
    id: 1,
    name: 'Dreaming',
    artist: 'Loletta Halloway',
    preview_url:'https://p.scdn.co/mp3-preview/bf7b5edcddeec3a704b77b504100f8565fca4d57',
    open_url : 'https://open.spotify.com/track/26ppQqlihAxkrwHv4NNlq0',
    face: 'http://www.vinyl-minded.com/images/6/671867.jpg'
  }, {
    id: 2,
    name: 'Act Like You Know',
    artist: 'Fat Larry band',
    preview_url : 'https://p.scdn.co/mp3-preview/1507d2c0c115fd853efd548df33e3ca8e892c14d',
    open_url : 'https://open.spotify.com/album/7EJ7WCaYLgelKpBONqOCaN',
    face: 'https://i.scdn.co/image/476d9145e734048ef6075162d7f49da32ce68c2f'
  }, {
    id: 3,
    name: 'Que Tal America',
    artist: 'Two Man Sound',
    preview_url:'https://p.scdn.co/mp3-preview/ad3864be4463b32dcde2acd7b5f166bac59b1401',
    open_url : 'https://open.spotify.com/album/1lEvq3ewf4pHTgk4aqe7Nl',
    face: 'https://i.scdn.co/image/ec5e967592c9e46f5b195e20bcb965588f1031b2'
  }, {
    id: 4,
    name: 'Roxanne',
    artist: 'The Police',
    preview_url:'https://p.scdn.co/mp3-preview/ebaa5cd3d12e50de4075948486011456c0d4247f',
    open_url : 'https://open.spotify.com/album/2HPpGOkeO0y2I071Js9s1A',
    face: 'https://i.scdn.co/image/7241f947ea45d1cd2c9716adc94f85668e511dcf'
  }, {
    id: 5,
    name: 'You Can t Always Get What You Want',
    artist: 'The Rolling Stones',
    preview_url : 'https://p.scdn.co/mp3-preview/75e92f88be509135ea97ba4cc7161f202d15f87a',
    open_url : 'https://open.spotify.com/track/72WZtWs6V7uu3aMgMmEkYe',
    face: 'https://i.scdn.co/image/91205a1c80960d7055f8ed1bbe022f195e1767a4'
  }, {
    id: 6,
    name: 'Candy s Room',
    artist: 'Bruce Springsteen',
    preview_url:'https://p.scdn.co/mp3-preview/f34abf05a7cba0b94c72e84178d9b3a6a72bcbe1',
    open_url : 'https://open.spotify.com/track/3p7W5VvPBZmuvkagBE2RbR',
    face: 'https://i.scdn.co/image/26d8c4db7622f1adecbb7ffc28a4dcdd8be907ac'
  }, {
    id: 7,
    name: 'Voyager',
    artist: 'Daft Punk',
    preview_url:'https://p.scdn.co/mp3-preview/90f22d693596f88ec9f07381eabe16de81032b7b',
    open_url : 'https://open.spotify.com/track/7cMFjxhbXBpOlais7KMF3j',
    face: 'https://i.scdn.co/image/ed01f028698b4211343f02109196939cfeadd06b'
  }, {
    id: 8,
    name: 'California Roll',
    artist: 'Snoop Dogg',
    preview_url:'https://p.scdn.co/mp3-preview/9b31322fece92d59789d403e0dfec3f5a5c7c5b6',
    open_url : 'https://open.spotify.com/track/1LmOaMuUPQD6BrK9fuGFa8',
    face: 'https://i.scdn.co/image/33a10cd598e200aabb95e817387e277fc74607ca'
  }, {
    id: 9,
    name: 'Walk of Life',
    artist: 'Dire Straits',
    preview_url:'https://p.scdn.co/mp3-preview/687ee71b2d17a374732d4666b608424ebdd8df68',
    open_url : 'https://open.spotify.com/track/7w4Tbkbx081vRJa8ol56Qf',
    face: 'https://i.scdn.co/image/2c8cf891d246b0aadf95a2c483b5b243aeda8a41'
  }];

  return {
    all: function() {
      return chansons;
    },
    
    get: function(chansonId) {
      for (var i = 0; i < chansons.length; i++) {
        if (chansons[i].id === parseInt(chansonId)) {
          return chansons[i];
        }
      }
      return null;
    }
  };

})

.factory('ListLibrary', function(){

  var lists=[{
    id: 0,
    name: 'Sunset In da Morning',
    content: [1,4,5,6],
    sender_id: 1,
    date: 0
  },{
    id: 1,
    name: 'Sunset In da Evening',
    content: [2,7,8,9],
    sender_id: 1,
    date: 0
  },{
    id: 2,
    name: 'Night With Da Girl',
    content: [0,3,4,2],
    sender_id: 0,
    date: 0
  },{
    id: 3,
    name: 'Peypouze',
    content: [1,8,9,7],
    sender_id: 0,
    date: 0
  }];

  return {
    all: function() {
      return lists;
    },
    removeList: function(list) {
      lists.splice(lists.indexOf(list), 1);
    },
    get: function(listId) {
      for (var i = 0; i < lists.length; i++) {
        if (lists[i].id === parseInt(listId)) {
          return lists[i];
        }
      }
      return null;
    }
  };
});
