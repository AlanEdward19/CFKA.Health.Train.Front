import { Component, Input } from '@angular/core';
import Card from 'src/app/interfaces/ICard';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  selectedTrainingCard: Card | null = null;

  selectTrainingCard(card: Card) 
  {
    if (this.selectedTrainingCard === card) 
    {
      this.selectedTrainingCard = null;
    } 
    else 
    {
      this.selectedTrainingCard = card;
    }
  }

  clearSelectedTrainingCard() {
    this.selectedTrainingCard = null;
  }
}
