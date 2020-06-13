class BowlingGame {
  constructor() {
  this.rolls = [];
  }

  roll(pins){
    this.rolls.push(pins)
  }

  score() {
    let result = 0;
    let rollIndex = 0;
  
    for(let turn = 0; turn < 10; turn++){
      if (this.rolls[rollIndex] == 10) {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
        rollIndex ++;
      }
      else if (this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10) {
       result += this.rolls[rollIndex] + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
       rollIndex += 2;
      }
      else {
        result += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
        rollIndex += 2;
      }
  }
    return result;
  }
}