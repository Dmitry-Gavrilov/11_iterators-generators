import Team from '../team';

const team = new Team().char;

const range = {
  from: 0,
  to: team.length - 1,
};

range[Symbol.iterator] = function iterations() {
  let current = this.from;
  const last = this.to;

  return {
    next() {
      if (current <= last) {
        const val = team[current];
        current += 1;
        return {
          done: false,
          value: val,
        };
      }

      return {
        done: true,
      };
    },
  };
};

const iterator = range[Symbol.iterator]();

test('Bowman', () => {
  const expected = {
    name: 'Bowman',
    health: 50,
    level: 1,
    type: 'Bowman',
    attack: 25,
    defence: 25,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('Swordsman', () => {
  const expected = {
    name: 'Swordsman',
    health: 50,
    level: 1,
    type: 'Swordsman',
    attack: 40,
    defence: 10,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('Undead', () => {
  const expected = {
    name: 'Undead',
    health: 50,
    level: 1,
    type: 'Undead',
    attack: 10,
    defence: 40,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('Magician', () => {
  const expected = {
    name: 'Magician',
    health: 50,
    level: 1,
    type: 'Magician',
    attack: 25,
    defence: 25,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('Zombie', () => {
  const expected = {
    name: 'Zombie',
    health: 50,
    level: 1,
    type: 'Zombie',
    attack: 40,
    defence: 10,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('Daemon', () => {
  const expected = {
    name: 'Daemon',
    health: 50,
    level: 1,
    type: 'Daemon',
    attack: 20,
    defence: 20,
  };
  const unit = iterator.next();
  const result = unit.value;
  expect(result).toEqual(expected);
});

test('done true test', () => {
  const expected = true;
  const unit = iterator.next();
  const result = unit.done;
  expect(result).toEqual(expected);
});
