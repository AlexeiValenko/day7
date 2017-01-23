/**
 * Example of Itay on 1/23/17.
 */

var orderedObject = {

    data: {},

    supportedStruct: [],

    addKey: function(key, val) {

        this.supportedStruct.push(key);



        this.data[key] = val;

    },

    forEach: function(callback) {

        this.supportedStruct.forEach(function(key) {

            callback(this.data[key]);

        }.bind(this));

    }

};





// Usage

orderedObject.addKey('foo', 'bar');

orderedObject.addKey('bar', 'baz');

orderedObject.addKey('baz', 'wow');



orderedObject.forEach(function(value) {

    console.log(value);

});