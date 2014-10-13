import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    update: function() {
      var self = this;
//    if (this.get('model.isDirty')) {
        this.get('model').save().then(function() {
          self.transitionToRoute('hostgroup');
        }, function(response) {
          console.log("Hostgroup not saved!" + response);
          //alert('error with saving buddy');
          alert(response);
        });
//    }
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('hostgroup');
    },

  }

});
