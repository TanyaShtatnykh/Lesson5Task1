import Zombie from '../Zombie.js';

test('Zombie', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newHero = new Zombie('Tanya');
  expect(correctHero).toEqual(newHero);
});
