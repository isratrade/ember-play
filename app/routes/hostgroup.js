import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('hostgroup', params.hostgroup_id);
  },
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('domains', this.store.find('domain'));
    controller.set('subnets', this.store.find('subnet'));
  },
  activate:   function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('entered hostgroup route');
  },

  deactivate:   function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('left hostgroup route');
  }
});
