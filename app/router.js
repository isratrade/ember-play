import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('hostgroups', function() {
    this.resource('hostgroup', { path: '/:hostgroup_id' });
  });
  this.route('domains');
  this.route('subnets');
});

export default Router;
