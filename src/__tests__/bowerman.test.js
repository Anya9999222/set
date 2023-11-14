import Team from '../js/team';

test('method add works correctly', () => {
  const team = new Team();
  team.add('Bowman');

  const correct = ['Bowman'];

  expect(team.toArray()).toEqual(correct);
});

// test('method ', () => {
//   const team = new Team();
//   team.add('Bowman')
//   team.add('Bowman')
//   const correct = ["Bowman"]

//   expect(
//     team

//   ).toEqual(correct);
// });

test('method addAll works correctly', () => {
  const team = new Team();
  team.addAll('Bowman', 'Zombie', 'Magician');

  const correct = ['Bowman', 'Zombie', 'Magician'];

  expect(team.toArray()).toEqual(correct);
});
