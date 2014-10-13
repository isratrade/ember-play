import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveChanges: function() {
      var self = this;
      if (this.get('model.isDirty')) {
        this.get('model').save().then(function() {
          self.transitionToRoute('user');
        });
      }
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('user');
    },


    delete: function() {
      var self = this;
      this.get('model').destroyRecord().then(function() {
        self.transitionToRoute('users');
      });
    }

  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty', 'isSaving')

});
