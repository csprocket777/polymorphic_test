import DS from 'ember-data';

export default DS.Model.extend({
    values:     DS.hasMany('fieldValue', {polymorphic: true, async: true})
});
