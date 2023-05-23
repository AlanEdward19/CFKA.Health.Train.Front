import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import Card from 'src/app/interfaces/ICard';
import Exercise from 'src/app/interfaces/IExercise';
import { ApiService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnChanges 
{
  @Input() isTraining: boolean = true; // Defina como true para uma seção de treinos e false para uma seção de exercícios

  @Input() selectedCard : Card | null = null;

  @Output() cardSelected = new EventEmitter<Card>();

  showForm: boolean = false;

  exercises: Exercise[] = []
  cards: Card[] = [];
  
  newCard: Card = {
    title: '',
    children: null
  };
  
  
  constructor(private apiService : ApiService)
  {   
    this.getExercises();
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(changes['selectedCard'] && !this.isTraining)
      {
        console.log("Mudança");
        this.cards = this.selectedCard?.children as Card[];
      }
  }

  addCard() {
    if (this.isTraining) 
    {
      this.newCard.title = this.getCardTitle(this.cards.length);
      this.cards.push({ ...this.newCard });
      this.resetForm();
    } 
    else 
    {
      if(!this.showForm)
      {
        this.showForm = true;
      }
      else
      {
          this.selectedCard?.children?.push({ ...this.newCard})
          //this.cards.push({ ...this.newCard})
          this.resetForm();
      }
      // else {
      //   alert('Selecione um card de treino antes de adicionar um card de exercício.');
      // }
     
    }
  }

  resetForm() 
  {
    this.newCard = 
    {
      title: ''
    };

    this.showForm = false;
  }

  getCardTitle(index: number): string 
  {
    return `Treino ${String.fromCharCode(65 + index)}`;
  }

  getTitle(): string 
  {
    if (this.isTraining) 
    {
      return "Treinos";
    } 
    else 
    {
      return "Exercícios";
    }
  }

  getExercises(): void
  {
    this.apiService.getExercises()
    .subscribe(ex => this.exercises = ex)
  }

  returnExerciseOptions() : string[]
  {
    const exerciseNames : string[] = []

    this.exercises.forEach(exercise => exerciseNames.push(exercise.name));

    return exerciseNames;
  }

  handleCardSelected(card: Card | null) 
  {
    this.selectedCard = card;
    this.cardSelected.emit(this.selectedCard as Card)
  }
}
