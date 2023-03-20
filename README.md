# test-project

This is a test project consisting of 3 parts: JavaScript, REST API, SQL.

## JavaScript
### 1.1 Extend JS Date object with a method daysTo()
A method daysTo() has been added to the JS Date object. It calculates the number of complete days between two dates. To use it, simply call the method on a Date object with another Date object as an argument.

For testing: 
```
$ node javascript/javascript_1
```

### Array of ordered sales
A program has been developed to produce an ordered array of sales. The input is an array of objects with the following structure: {amount: 10000, quantity: 10}. The output is a new array of ordered sales, where each array element has the structure {amount: 10000, quantity: 10, Total: 100000}, where Total = amount * quantity. The input array remains intact. The array is ordered by Total.

For testing: 
```
$ node javascript/javascript_2
```

### Object Projection
A program has been developed for "Object Projection". The input is any JSON object and a prototype object. The output is a projected object, where the structure is the intersection of the source object and prototype object structures. The values of properties in the projected object are the same as the values of respective properties in the source object.

For testing: 
```
$ node javascript/javascript_3
```


## REST API
### Google Calendar busy intervals
A program has been developed in JS which returns an array of free/busy intervals in a given time period for any shared Google calendar. The input is the shared Google calendar ID and the time period (starting and ending moments). The output is an array of busy intervals.

To test, please use the email: t7094459@gmail.com password: test1234test.


## SQL

* Tables have been created and data has been inserted
* SQL queries

[Try-SQL Editor](https://www.w3schools.com/sql/trysql.asp?filename=trysql_select_columns)