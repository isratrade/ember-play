import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('subnet', params.subnet_id);
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('twopane', false);
//    controller.set('hidetable', 'mmmmmm');
  },

  activate:   function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('ENTERING SUBNET SINGLE route');
    this.controllerFor('subnet').set('hidetable', 'eeee');
  },

  deactivate:   function() {
    this.controllerFor('subnet').set('hidetable', 'fffff')
    console.log('EXISTING SUBNET SINGLE route');
  },

});
