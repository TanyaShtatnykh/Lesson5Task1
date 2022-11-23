import Undead from '../Undead.js';

test('Undead', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newHero = new Undead('Tanya');
  expect(correctHero).toEqual(newHero);
});
