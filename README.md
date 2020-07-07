# @codeconsultants-public/mst

This is the repository for the npm package @codeconsultants-public/mst.  This library is intended to gather useful helpers, custom types, etc. for use with mobx-state-tree.

## Available Types
* ISODate
	This provides a simple way to use the mobx-state-tree Date type with ISO8601 format date strings, as it swaps over to using this format as it's snapshot format so parses these values by default.
