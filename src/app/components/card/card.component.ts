import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() isTraining : boolean = true;
  isSelected : boolean = false;

  /* Para Exercicios*/

  @Input() title?: string;
  @Input() series?: number;
  @Input() repetitions?: number;
  @Input() observations?: string;

  /* Para Treino*/
  @Input() howManyExercises?: number;


  toggleSelect() {
    console.log(this.isSelected);
    this.isSelected = !this.isSelected;
  }
  

}
