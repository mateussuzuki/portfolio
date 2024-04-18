import { Component } from '@angular/core';
import { Tecnos } from '../../modal/tecnos.modal';

@Component({
  selector: 'app-tec',
  templateUrl: './tec.component.html',
  styleUrl: './tec.component.scss'
})
export class TecComponent {

  tecnos:Tecnos = new Tecnos()

  constructor(){}

}
