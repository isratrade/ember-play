import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createUser: function() {
      var self = this;
      var user = this.store.createRecord('user', this.get('fields'));
      user.save().then(function() {
        self.transitionToRoute('user', user);
      });
    }
  }
});
