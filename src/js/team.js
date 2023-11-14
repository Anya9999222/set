export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже есть в команде');
    }
    this.members.add(character);
    return this.members;
  }

  addAll(...characters) {
    characters.forEach((item) => {
      this.members.add(item);
    });
    return this.members;
  }

  toArray() {
    return Array.from(this.members);
  }
}
