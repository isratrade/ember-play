import Ember from 'ember';

export default Ember.Route.extend({

  activate:   function() {
    this.controllerFor('user').set('isEditing', true);
    console.log('ACTIVATE USER EDIT ROUTE');
  },
  deactivate: function() {
    this.controllerFor('user').set('isEditing', false);
    console.log('DE-ACTIVATE USER EDIT ROUTE');
  }

});
