import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({

  model: function(params) {
    return ajax({
      //url: 'https://api.github.com/repos/stefanpenner/ember-cli/releases',
      url: 'https://api.github.com/repos/' + params.owner + '/' + params.repo + '/releases',
      type: 'get'
    }).then(function(releases) {
        releases.forEach(function(release) {
          release.created_at = new Date(release.created_at);
          release.published_at = new Date(release.published_at);
        });
        return releases;
    });
  }

});
