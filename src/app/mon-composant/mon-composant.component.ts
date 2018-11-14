import { Component, OnInit, Input } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-mon-composant',
  templateUrl: './mon-composant.component.html',
  styleUrls: ['./mon-composant.component.css']
})
export class MonComposantComponent implements OnInit {
  @Input() playerClass: string;
  @Input() playerLevel: string;


  public getPlayerClass(): string {
    return this.playerClass;
  }
  
  public getPlayerLevel(): string {
    return this.playerLevel;
  }

  constructor() { }

  ngOnInit() {
  }

}

abstract class PersonClass {
  name: string;
  type: string;
  level: number;
  lifePoint: number;
  attackPoint: number;
  constructor(theName: string, theType: string, theLevel: number) {
    this.name = theName;
    this.type = theType;
    this.level = theLevel;
  }

  getName() {
    return this.name;
  }

  getType() {
    return this.type;
  }

  getLevel() {
    return this.level;
  }

  getLifePoint() {
    return this.lifePoint;
  }

  getAttackPoint() {
    return this.attackPoint;
  }

  attackPlayer(p: PersonClass){
    console.log("L'attaque provoque : " + this.getAttackPoint() + " points de dégâts");
    p.lifePoint -= this.attackPoint;
    // return p.getLifePoint() -= p.getAttackPoint();
  }

}

class Hunter extends PersonClass {
  constructor(name: string, type: string, level: number) {
    super(name, type, level);
  }
  lifePoint = 200;
  attackPoint = 50;
}

class Warrior extends PersonClass {
  constructor(name: string, type: string, level: number) {
    super(name, type, level);
  }
  lifePoint = 500;
  attackPoint = 75;
}

class Wizard extends PersonClass {
  constructor(name: string, type: string, level: number) {
    super(name, type, level);
  }
  lifePoint = 200;
  attackPoint = 100;
}

var hunt = new Hunter("Hanzo", "Joueur", 1);
var war = new Warrior("Garrosh", "Joueur", 1);
var wizard = new Wizard("Gandalf","Joueur", 1);

console.log(hunt);
console.log(war);
console.log(hunt.attackPlayer(war));
console.log(war);