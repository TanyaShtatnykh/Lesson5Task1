import Character from '../Character.js';

test('incorrect name', () => {
  expect(() => new Character('N', 'Magician')).toThrow();
  expect(() => new Character('NoneNoneNoneNone', 'Magician')).toThrow();
});

test('incorrect type', () => {
  expect(() => new Character('Name', 'Student')).toThrow();
});

test('Create character', () => {
  const newHero = new Character('Tanya', 'Magician');
  const correctHero = {
    name: 'Tanya',
    type: 'Magician',
    health: 100,
    level: 1,
  };
  expect(newHero).toEqual(correctHero);
});
