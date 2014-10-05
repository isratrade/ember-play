import Ember from 'ember';

export default Ember.ObjectController.extend({
    aaa: {
      id: 10
    },
    hidetable: 'xyz',
    actions: {
      bbb: function () {
        this.set('hidetable', 'bbb');
      }
    }
});
