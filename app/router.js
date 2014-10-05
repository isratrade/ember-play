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

  this.resource('subnets',     {path:'/subnets' });
  // form to allow you upload new subnet
  this.resource('subnet.new',  {path:'/subnet/new'});
  // view an existing subnet
  this.resource('subnet',      {path:'/subnet/:subnet_id'}, function(){
    // edit an existing subnet
    this.route('edit');
  });
});

export default Router;
