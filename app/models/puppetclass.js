import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  hosts_count: DS.attr('number'),
  hostgroups_count: DS.attr('number'),
  global_class_params_count: DS.attr('number'),
  lookup_keys_count: DS.attr('number')
});
