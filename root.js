var nr = require('newton-raphson-method');

function f (x) { return (x - 1) * (x + 2); }
function fp (x) { return (x - 1) + (x + 2); }

// Using the derivative:
nr(f, fp, 2)
// => 1.0000000000000000 (6 iterations)

// Using a numerical derivative:
nr(f, 2)
// => 1.0000000000000000 (6 iterations)