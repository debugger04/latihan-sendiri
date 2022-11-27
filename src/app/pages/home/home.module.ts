import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { FaqComponent } from './faq/faq.component';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    FaqComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
