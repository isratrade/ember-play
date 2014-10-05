import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('subnet');
  },

  actions: {
    goToNewSubnet: function () {
      this.transitionTo( 'subnet.new' );
    },
    goToSubnet: function( model ) {
      this.transitionTo( 'subnet', model );
    },
    edit: function( model ) {
      this.transitionTo( 'subnet.edit', model.copy() );
    },
    create: function( model ) {
      this.storage.create( model );
      this.transitionTo( 'subnets' );
    },
    update: function( model ) {
      this.storage.update( model );
      this.transitionTo( 'subnets' );
    },
    remove: function( model ) {
      this.storage.remove( model );
    },
    cancel: function( model ) {
      Ember.run( model, "destroy" );
      //this.storage.refresh(App.Subnet);
      this.transitionTo( 'subnets' );
    }
  }

});
