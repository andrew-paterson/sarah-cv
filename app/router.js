import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
    this.route('index', {path: '/'});
    this.route('biographical');
  	this.route('work-experience');
  	this.route('required-skills');
  	this.route('references');
  	this.route('page-not-found', {path: '/*path'});
});

Router.reopen({
  notifyGoogleAnalytics: function() {
    return ga('send', 'pageview', {
        'page': this.get('url'),
        'title': this.get('url')
      });
  }.on('didTransition')
});

export default Router;
