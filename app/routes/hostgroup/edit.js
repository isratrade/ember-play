import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    controller.set('model', model);
    controller.set('domains', this.store.find('domain'));
    controller.set('subnets', this.store.find('subnet'));
  },
});
