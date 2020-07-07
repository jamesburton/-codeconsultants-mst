import { types } from "mobx-state-tree";
import ISODate from "./ISODate";
//const { types } = require("mobx-state-tree");
//const ISODate = require("./ISODate");

const TestModel = types.model('TestModel', { value: types.maybe(ISODate) })
	.actions(self => ({ setValue: value => self.value = value }));
const testModel = TestModel.create();

const testValues = [
	["2012-09-27", new Date(1348704000000)],
	["2013-07-16Z", new Date(1373932800000)],
	["2013-07-16T19:00", new Date(1373997600000)],
	["2013-07-16T19:23:51Z", new Date(1374002631000)],
];

const assignValue = (input) => {
	testModel.setValue(input);
	return testModel.value;
};

describe('Testing ISODate handling of known-good ISO8601 strings', () => {
	test.each(testValues)('Can correctly handle date string %s',(input,expected) => {
		//expect(assignValue(input)).toBe(expected);
		expect(assignValue(input)).toStrictEqual(expected);
	});
});

