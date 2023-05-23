import { Component, Input, Output, EventEmitter } from '@angular/core';
import Card from 'src/app/interfaces/ICard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() isTraining: boolean = true;
  @Input() isSelected: boolean = false;

  @Input() children: Card[] | null = null;

  @Output() cardSelected = new EventEmitter<Card>();

  @Input() title?: string;
  @Input() series?: number;
  @Input() repetitions?: number;
  @Input() observations?: string;



  buildCard() : Card 
  {
    const card: Card = {
      title : this.title as string,
      children: this.children,
      observations: this.observations,
      repetitions: this.repetitions,
      series: this.series
    }

    return card;
  }

  toggleSelect() 
  {
    if(this.isTraining)
    {
      this.isSelected = !this.isSelected

      if (this.isSelected) 
      {
        console.log("Emitir")
        this.cardSelected.emit(this.buildCard());
      } 
      else 
      {
        console.log("Tirar")
        this.cardSelected.emit(undefined);
      }
    }
    
  }

  calculateHowManyExercises() : number
  {
    if(this.isTraining && this.children != null)
    {
      return this.children!.length
    }

    return 0;
  }
}
