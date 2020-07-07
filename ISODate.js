import { types } from "mobx-state-tree";
const ISODateRegEx = /^(\d{4})(?:-?W(\d+)(?:-?(\d+)D?)?|(?:-(\d+))?-(\d+))(?:[T ](\d+):(\d+)(?::(\d+)(?:\.(\d+))?)?)?(?:Z(-?\d*))?$/;
//const ISODateRegEx = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
//export const ISODateRegEx = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d)|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d)/;
export const ISODate = types.custom({
    name: "ISODate",
    fromSnapshot(value /*: string*/) {
        return new Date(Date.parse(value));
    },
    toSnapshot(value /*: Date*/) {
        return value.toISOString();
    },
    isTargetType(value /*: string | Date*/) {
        return value instanceof Date;
    },
    getValidationMessage(value /*: string*/) {
        if (ISODateRegEx.test(value))
            return ""; // OK
        return `'${value}' doesn't look like a valid ISO Date`;
    }
});
export default ISODate;