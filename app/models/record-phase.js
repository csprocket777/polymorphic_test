import DS from 'ember-data';
import FieldValue from './field-value';

export default FieldValue.extend({
  title: DS.attr("string")
});
