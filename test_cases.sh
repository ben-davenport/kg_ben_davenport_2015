node main.js 'foo' 'bar'  # should be false
node main.js 'bar' 'foo'  # should be true
node main.js 'bpd' 'jm' # should be false
node main.js '123' 'bpd' # should be true
node main.js 'abc' 'bcd' # should be true;