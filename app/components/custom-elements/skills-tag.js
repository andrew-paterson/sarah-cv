import Ember from 'ember';

export default Ember.Component.extend({
	metadata: Ember.inject.service(),
	tagName: 'div',
	classNames: ['skills-tag'],

	tagTitle: function() {
		if (this.get('relatedSkillId') || this.get('relatedSkillId') === 0) {
			var thisSkill = this.get('metadata.skillsTags')[this.get('relatedSkillId')];
			var displayTitle = thisSkill.shortTitle ? thisSkill.shortTitle : thisSkill.title;
			return displayTitle;
		}
	}.property('relatedSkillId'),

	tagMetaTitle: function() {
		if (this.get('relatedSkillId') || this.get('relatedSkillId') === 0) {
			return this.get('metadata.skillsTags')[this.get('relatedSkillId')].metaTitle;
		}
	}.property('relatedSkillId'),

});
