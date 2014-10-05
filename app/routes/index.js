import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function( transition ) {
    // redirect root to hostgroups
    this.transitionTo( 'subnets' );
  }
});
