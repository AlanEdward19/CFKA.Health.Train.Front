import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { SectionModule } from 'src/app/components/section/section.module';
import { NavModule } from 'src/app/components/nav/nav.module';



@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    SectionModule,
    NavModule,
    MainPageRoutingModule
  ]
})
export class MainPageModule { }
