import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: false,

  cntUsers: function() {
      return this.get('length');
  }.property('@each')

});
