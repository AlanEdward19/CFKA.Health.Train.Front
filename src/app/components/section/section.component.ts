import { Component, Input } from '@angular/core';

interface Card {
  title: string;
  series?: number;
  repetitions?: number;
  observations?: string;
}

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() title: string = "";
  @Input() isTraining: boolean = true; // Defina como true para uma seção de treinos e false para uma seção de exercícios

  showForm: boolean = false;

  cards: Card[] = [];
  newCard: Card = {
    title: ''
  };

  addCard() {
    if (this.isTraining) {
      this.newCard.title = this.getCardTitle(this.cards.length);
      this.cards.push({ ...this.newCard });
      this.resetForm();
    } else {
      if (!this.showForm) {
        this.showForm = true;
      } else {
        this.cards.push({ ...this.newCard });
        this.resetForm();
      }
    }
  }

  resetForm() {
    this.newCard = {
      title: ''
    };
    this.showForm = false;
  }

  getCardTitle(index: number): string {
    return `Treino ${String.fromCharCode(65 + index)}`;
  }

  getTitle(): string {
    if (this.isTraining) {
      return "Treinos";
    } else {
      return "Exercícios";
    }
  }

  getExerciseOptions(): string[] {
    // Retorne as opções de exercício aqui
    return ['Exercício 1', 'Exercício 2', 'Exercício 3'];
  }
}
