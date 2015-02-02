import Ember from 'ember';

export default Ember.ObjectController.extend({
        
    recordPhases: function(){
        return this.store.find('record-phase');
    }.property(),

    currentRecord: function(){
    	return this.store.find('record-field-value', 1);
    }.property(),

    currentSelectedPhase: function(key, value){
    	if( arguments.length > 1 )
    	{
			if( this.get('currentRecord.values.length') > 0 )
			{
				this.get('currentRecord.values').removeAt(0);
			}
			this.get('currentRecord.values').addObject(value);
    	}

    	return this.get('currentRecord.values.firstObject');
    }.property('currentRecord.values.[]'),
    
    actions:{
        save: function(){
            this.get('currentRecord.content').save();
        }
    }
});
