import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  parent_id: DS.attr('number'),
  subnet: DS.belongsTo('subnet'),
  domain: DS.belongsTo('domain'),
  puppetclasses: DS.hasMany('puppetclass', {async: true}),
  config_groups: DS.hasMany('configGroup', {async: true}),
  locations: DS.hasMany('location', {async: true}),
  organizations: DS.hasMany('organization', {async: true})
});
