'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _day1 = require('./day1');

var _day12 = _interopRequireDefault(_day1);

describe('dayOne', function () {

  it('is sunny outside', function () {
    expect((0, _day12['default'])('L5')).toBeTruthy();
  });
});