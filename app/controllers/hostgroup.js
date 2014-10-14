import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: false,
  actions: {
    saveChanges: function() {
      var self = this;
      if (this.get('model.isDirty')) {
        this.get('model').save().then(function() {
          self.transitionTo('lead');
        });
      }
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionTo('hostgroup');
    }

  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving');
  }.property('isDirty', 'isSaving')
});
