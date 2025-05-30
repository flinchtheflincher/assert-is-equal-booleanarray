/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isBooleanArray = require( '@stdlib/assert-is-booleanarray' );
var hasEqualValues = require( '@stdlib/array-base-assert-has-equal-values' );


// MAIN //

/**
* Tests if two arguments are both BooleanArrays and have equal values.
*
* @param {*} v1 - first value
* @param {*} v2 - second value
* @returns {boolean} boolean result
*
* @example
* var BooleanArray = require( '@stdlib/array-bool' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, false, false, true ] );
*
* var out = isEqualBooleanArray( x, y );
* // returns true
*
* @example
* var BooleanArray = require( '@stdlib/array-bool' );
*
* var x = new BooleanArray( [ true, false, false, true ] );
* var y = new BooleanArray( [ true, true, false, false ] );
*
* var out = isEqualBooleanArray( x, y );
* // returns false
*/
function isEqualBooleanArray( v1, v2 ) {
	return ( isBooleanArray( v1 ) && isBooleanArray( v2 ) && hasEqualValues( v1, v2 ) ); // eslint-disable-line max-len
}


// EXPORTS //

module.exports = isEqualBooleanArray;
