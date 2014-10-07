import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  find: function(name, id) {
    // subreddit
    // aww
    return ajax("http://www.reddit.com/r/" + id + ".json");
  }
});
