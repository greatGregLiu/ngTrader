define(function() {
  'use strict';

  /* @ngInject */
  var tutorialCtrl = function(tutorialSrvc) {
    this.options = tutorialSrvc.options;
  };

  tutorialCtrl.prototype.endTutorial = function() {
    console.log('stuff');
  };

  return tutorialCtrl;
});