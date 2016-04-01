import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  answer: DS.attr(),
  notes: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});