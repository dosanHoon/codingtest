class Wizard {
  constructor(health, mana, armor) {
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  attack() {
    console.log("파이어볼");
  }
}

export default function 클래스만들기(health, mana, armor) {
  const x = new Wizard(health, mana, armor);
  x.attack();
  return [x.health, x.mana, x.armor];
}
