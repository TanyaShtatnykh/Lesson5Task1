import Daemon from '../Daemon.js';

test('Daemon', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newHero = new Daemon('Tanya');
  expect(correctHero).toEqual(newHero);
});
