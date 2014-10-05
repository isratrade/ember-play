import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  subnet: DS.belongsTo('subnet'),
  domain: DS.belongsTo('domain')
});
