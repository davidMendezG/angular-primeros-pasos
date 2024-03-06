import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  public title?:string;

  @Input()
  public characterList:Character[] = [{
    name: 'Trunks',
    power: 10
  }] 

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id?: string ):void{
    if( !id ) return;
    this.onDelete.emit(id);
  }

}
