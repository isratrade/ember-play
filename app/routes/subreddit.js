import Ember from 'ember';
import SubredditAdapter from 'rhci/adapters/subreddit';

export default Ember.Route.extend({
  model: function(params) {
    //return {id: params.subreddit_id, hello: 'world'};
    var adapter = SubredditAdapter.create();
    return adapter.find('subreddit', params.subreddit_id);
  }
});
