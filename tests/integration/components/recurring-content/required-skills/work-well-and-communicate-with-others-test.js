import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('recurring-content/required-skills/work-well-and-communicate-with-others', 'Integration | Component | recurring content/required skills/work well and communicate with others', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{recurring-content/required-skills/work-well-and-communicate-with-others}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#recurring-content/required-skills/work-well-and-communicate-with-others}}
      template block text
    {{/recurring-content/required-skills/work-well-and-communicate-with-others}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
