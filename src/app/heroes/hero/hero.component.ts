import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name:  string = 'IronMan';
  public age:   number = 45;

  
  public get capitalizeName() : string {
    return this.name.toUpperCase();
  }
  
  public getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  public changeHero():void {
    this.name = 'Spider-Man';
  }

  public changeAge():void {
    this.age = 25;
  }

  public reset():void {
    this.age = 45;
    this.name = 'IronMan';
  }
  
}
