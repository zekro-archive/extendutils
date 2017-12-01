require('./index.js')

console.log(
    "\n'Hey Ho' contains 'ho' (case sensitive)\n> " +
    'Hey Ho'.contains('ho', true)
)

console.log(
    "\n'Hey Ho' contains 'Ho' (case sensitive)\n> " +
    'Hey Ho'.contains('Ho', true)
)

console.log(
    "\n'Hey Ho' contains 'ho' (not case sensitive)\n> " +
    'Hey Ho'.contains('ho')
)

console.log(
    "\n'Hey Ho' contains 'Ho' (not case sensitive)\n> " +
    'Hey Ho'.contains('ho')
)

console.log(
    "\n'Hey Ho' contains ['Yo', 'Ho'] (not case sensitive)\n> " +
    'Hey Ho'.contains(['Yo', 'Ho'])
)

console.log(
    "\n'Hey Ho' contains ['Yo', 'Mo', 'Bo'] (not case sensitive)\n> " +
    'Hey Ho'.contains(['Yo', 'Mo', 'Bo'])
)

console.log(
    "\n['Hey', 'Ho'] contains 'Ho' (not case sensitive)\n> " +
    ['Hey', 'Ho'].contains('Ho')
)

console.log(
    "\n['Hey', 'Ho'] contains ['Mo', 'Bo', 'Ho'] (not case sensitive)\n> " +
    ['Hey', 'Ho'].contains(['Mo', 'Bo', 'Ho'])
)