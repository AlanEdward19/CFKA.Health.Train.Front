import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { CardModule } from '../card/card.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    CardModule
  ],
  exports:[
    SectionComponent
  ]
})
export class SectionModule { }