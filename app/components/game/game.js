define(function(require) {
  'use strict';

  var angular = require('angular'),
    accountSrvc = require('account/accountSrvc'),
    gameCtrl = require('game/gameCtrl'),
    gameModalInstanceCtrl = require('game/gameModalInstanceCtrl'),
    gameSrvc = require('game/gameSrvc');

  return angular.module('ngTrader.game', [])
    .controller('gameCtrl', gameCtrl)
    .controller('gameModalInstanceCtrl', gameModalInstanceCtrl)
    .service('gameSrvc', gameSrvc);
});