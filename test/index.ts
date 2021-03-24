'use strict';

import assert from 'assert';
import ical, {
    ICalCalendar,
    ICalCalendarMethod,
    ICalEvent
} from '../src';

describe('ical-generator Index', function() {
    it('should be a function', function() {
        assert.strictEqual(typeof ical, 'function');
    });

    it('should return a ICalCalendar', function() {
        assert.ok(ical() instanceof ICalCalendar);
    });

    it('should export ICalCalendar', function() {
        assert.ok(ICalCalendar);
    });

    it('should export ICalCalendarMethod', function() {
        assert.ok(ICalCalendarMethod);
    });

    it('should export ICalEvent', function() {
        assert.ok(ICalEvent);
    });
});
