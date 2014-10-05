import Ember from 'ember';

export default Ember.ArrayController.extend({
  needs: ['subnet'],
  yyyyy: function () {
    return 'yyyyy'; //this.controllers.subnet.get('hidetable');
  }.property()
});
