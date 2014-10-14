import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  title: DS.attr('string'),
  subnet: DS.belongsTo('subnet'),
  domain: DS.belongsTo('domain'),
  puppetclasses: DS.hasMany('puppetclass', {async: true})
});
