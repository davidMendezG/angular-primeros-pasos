import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  };

  emitCharacter(){
    console.log(this.character);
    if(this.character.name.length === 0) return;
    this.onNewCharacter.emit({...this.character});
    this.character = {
            name: '',
            power: 0
    };
  /*   
    se debe limpiar ya que en js los parametros se envian por referencia 
    si no se rompe (en este caso se crea un nuevo objeto vacio) se afecta todo lo que 
    viene despues

  otra forma de hacerlo =>
  this.onNewCharacter.emit(this.character);
 */


  }

}
