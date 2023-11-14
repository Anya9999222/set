import Team from '../js/team';

let team;

beforeEach(() => {
  team = new Team();
});
it('should add character', () => {
  team.add('Bowman');
  const correct = ['Bowman'];
  expect(team.toArray()).toEqual(correct);
});

it('throws an error', () => {
  team.add('Bowman');
  expect(() => {
    team.add('Bowman');
  }).toThrow('Такой персонаж уже есть в команде');
});

it('adds all characters correctly', () => {
  team.addAll('Bowman', 'Zombie', 'Magician');
  const correct = ['Bowman', 'Zombie', 'Magician'];
  expect(team.toArray()).toEqual(correct);
});
