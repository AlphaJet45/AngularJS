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

  getNom() {
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
    return p.getLifePoint() - p.getAttackPoint();
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

// var hanzo = new Hunter(name: "Hanzo", type: "joueur", level: 1);