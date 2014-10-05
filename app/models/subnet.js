import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  network: DS.attr('string'),
  cidr: DS.attr('string'),
  mask: DS.attr('string'),
  priority: DS.attr('string'),
  vlanid: DS.attr('string'),
  gateway: DS.attr('string'),
  dns_primary: DS.attr('string'),
  dns_secondary: DS.attr('string'),
  from: DS.attr('string'),
  to: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  hostgroups: DS.hasMany('hostgroup')

});
