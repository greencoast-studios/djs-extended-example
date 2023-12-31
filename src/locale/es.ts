const GREETINGS = {
  'greetings.hello': 'Hola {name}',
  'greetings.hi': '¡Hola!',
  'greetings.bye': 'Chao',
  'greetings.goodbye': '¡Adiós!'
};

const EXTRA = {
  'extra.nice_weather': "¡La temperatura es de {temperature}, qué buen clima!"
};

const strings = {
  ...GREETINGS,
  ...EXTRA
}

export default strings;
