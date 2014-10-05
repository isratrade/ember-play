import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType,
  // log when Ember generates a controller or a route from a generic class
  LOG_ACTIVE_GENERATION: true,
  // log when Ember looks up a template or a view
  LOG_VIEW_LOOKUPS: true
});

Router.map(function() {
  this.resource('hostgroups', function() {
    this.resource('hostgroup', { path: '/:hostgroup_id' });
  });
  this.route('domains');
  this.route('subnets');
});

export default Router;
