import Bowerman from '../Bowerman.js';
import Swordsman from '../Swordsman.js';
import Magician from '../Magician.js';
import Daemon from '../Daemon.js';
import Undead from '../Undead.js';
import Zombie from '../Zombie.js';

test('Bowerman', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Bowerman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const newHero = new Bowerman('Tanya');
  expect(correctHero).toEqual(newHero);
});

test('Swordsman', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  const newHero = new Swordsman('Tanya');
  expect(correctHero).toEqual(newHero);
});

test('Magician', () => {
  const correctHero = {
    name: 'Tanya',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  const newHero = new Magician('Tanya');
  expect(correctHero).toEqual(newHero);
});

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
