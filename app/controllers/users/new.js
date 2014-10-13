import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {

      var self = this;
      var fields = this.get('fields');

      // if (self.valid(fields)) {
        var user = this.store.createRecord('user', fields);

        user.save().then(function(user) {
          self.transitionToRoute('user', user);
        }, function(response) {
          console.log("User not saved!");
          alert(response);
        });
      // } else {
      //   console.log('error got here');
      //   this.set('showError', true)
      // }


      // post.save().then(function() {
      //   console.log("Post saved.");
      // }, function(response) {
      //   console.error("Post not saved!");
      // });

    },

    cancel: function() {
      this.transitionToRoute('users');
    }


  }
});
