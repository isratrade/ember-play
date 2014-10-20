import Ember from 'ember';

export default Ember.ArrayController.extend({
  sortProperties: ['id'],
  sortAscending: false,

  cntAllUsers: function() {
      return this.get('length');
  }.property('@each'),

  searchedUsers: function() {
    var search = this.get('search').toLowerCase();
    //return this.filterProperty('firstname', search);  // this searches ONLY by first name Joe, not partial, Jo
    return this.filter(function(user) {
      return (user.get('fullName').toLowerCase().indexOf(search) !== -1);
    });
  }.property('search', 'this.@each'),

  filteredUsers: function() {
    return this.get('search') ? this.get('searchedUsers') : this;
  }.property('search', 'searchedUsers'),

  thisUsers: function() {
    return this;
  }.property(),

  cntFilteredUsers: function() {
      return this.get('filteredUsers').get('length');
  }.property('search', 'this.@each')


});
