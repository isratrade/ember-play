import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    // redirect root to hostgroups
    this.transitionTo('hostgroups');
  }
});
