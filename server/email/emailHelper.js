var Apps = require('../applications/applicationModel.js');
var Users = require('../users/userModel.js');
var emails = require('./emailModel.js');

var weeklyReminderSender = function() {
  console.log('weekly reminder started');
  var reg = /\w+/;
  var user;
  //setInterval(function(){
    Users.find({username:reg}, function(err, data) {
      var users = data;
      console.log('USERS!!!!!!: ', users)
      for(var i = 0; i < users.length; i++) {
        user = users[i];
        console.log('USER!!!!!!!!!!!!!: ', user)
        Apps.find({userId:user.id}, function(err, apps) {
          console.log('APPS!!!!!!!!: ', apps)
          var userApps = apps;
          if(userApps.length > 0) {
            console.log('aboutToSend emailHelper.js user: ', user.username)
            emails.send(user, userApps);
          }
        });
      }
    });
  //}, 1000 * 10 /* * 60 * 24 */)
};
module.exports = weeklyReminderSender;