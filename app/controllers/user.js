import Ember from 'ember';

export default Ember.ObjectController.extend({
  actions: {
    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
      //this.get('model').save();
    }
  },

  showUnsavedMessage: function() {
    return this.get('isDirty') && !this.get('isSaving')
  }.property('isDirty', 'isSaving')

});
