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
    this.resource('hostgroup', { path: '/:hostgroup_id' }, function() {
      this.route('edit');
    });
  });
  this.route('domains');
  this.resource('subnets', function() {
    this.resource('subnet', { path: '/:subnet_id' }, function(){
      this.route('edit');
    });
  });
  this.resource('subnets');
  // form to allow you upload new subnet
  this.resource('subnet.new',  {path:'/subnet/new'});
  // view an existing subnet
  this.resource('single-subnet',      {path:'/subnet/:subnet_id'}, function(){
    // edit an existing subnet
    this.route('edit');
  });
  this.resource('subreddit', {path: '/r/:subreddit_id'});

  this.resource('todos', { path: '/todos' }, function() {
      this.route('active');
      this.route('completed');
  });

  this.route('popular-now');
  this.resource('releases', {path: '/:owner/:repo/releases'}, function() {
    this.route('show', {path: '/:release_id'});
  });
  this.route('releases/show');

  this.resource('users', { path: '/users' }, function() {
    this.route('new');
    this.resource('user', { path: 'users/:id' }, function() {
      this.route('edit');
    });
  });

});

export default Router;
