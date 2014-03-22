#filterizer

Filterizer is a jQuery plugin that allows a text field to act as a filter on the rows of a table.

###Prerequisites
- table must have an id attribute
- table must contain `thead` and `tbody` tags

###Usage

```
$('#someTextField').filterizer({
  table: 'tableToFilter',
  column: columnNumber
});
```

where `'tableToFilter'` is the table's id attribute for which you would like to apply the filter, and `columnNumber` is the column index (zero-based) you would like to filter on.

By default, if no options are supplied, **filterizer** will use the first table it finds in the DOM and filter by the table's first column.

###Demo

A working demo can be found at [filterizer - CodePen]

###License

MIT

[filterizer - CodePen]:http://cdpn.io/HbsfI