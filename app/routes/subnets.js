import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('subnet');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('twopane', true);
    controller.set('hidetable', 'abc');
    //this.controllerFor('subnet').set('hidetable', 'xyzzzzz');
  },

  activate: function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('ENTERING SUBNETS INDEX route');
  },

  deactivate: function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('EXITING SUBNETS INDEX route');
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
