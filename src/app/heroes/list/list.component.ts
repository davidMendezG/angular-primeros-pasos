import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames:string[] = ['Spider-Man','Thor','Hulk','IronMan','She-Hulk'];
  public deletedHero?:string;

  public borrarUltimoHeroe() : void {
      this.deletedHero = this.heroNames.pop();
  }

  public get getDeletedHero() : string {
    return this.deletedHero? this.deletedHero : '';
  }

  public resetList() :void {
    this.heroNames = ['Spider-Man','Thor','Hulk','IronMan','She-Hulk'];
    this.deletedHero=undefined;
  }

}
