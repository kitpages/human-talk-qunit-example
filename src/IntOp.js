// IntOp.js, constructor
var IntOp = function() {};

// methods
IntOp.prototype = {
    add: function(a, b) {
        return a + b;
    },
    sub: function(a, b) {
        return a - b;
    },
    areEqual: function(a, b) {
        return (a === b);
    }
};