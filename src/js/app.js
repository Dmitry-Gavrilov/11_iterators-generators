import Team from './team';

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

/*
 for (let player of team) {
  console.log(player)
  }
  */
