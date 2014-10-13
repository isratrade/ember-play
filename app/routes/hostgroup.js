import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('hostgroup', params.hostgroup_id);
  },
  activate:   function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('entered hostgroup route');
  },

  deactivate:   function() {
    //this.controllerFor('hostgroup').set('showColumns', false)
    console.log('left hostgroup route');
  },

  setupController: function(controller, model) {
    controller.set('model', model);
    //controller.set('puppetclasses', this.store.find('puppetclass'));
  },

});
