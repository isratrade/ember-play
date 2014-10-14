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
    // TODO - how to make parent_id dynamic
    controller.set('parent_hostgroup', this.store.find('hostgroup', 1));
  },

});
