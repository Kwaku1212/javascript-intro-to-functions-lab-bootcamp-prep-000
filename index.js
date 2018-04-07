function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
  const spy = string.toUpperCase()
}
logShout('hello')

function logShout(string) {
  console.log(string.toLowerCase())
  const spy = string.toLowerCase()
}
logShout('HELLO')
