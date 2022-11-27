import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { HaloComponent } from './halo/halo.component';



@NgModule({
  declarations: [
    AboutComponent,
    HaloComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AboutModule { }
