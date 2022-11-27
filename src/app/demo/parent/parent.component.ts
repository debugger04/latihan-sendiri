import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  // Properties
  title: string = 'Ginanjar';
  namaOrang: string = '';

  umur: number = 0; // Orang 2

  constructor() { }

  ngOnInit(): void {
    //On Initialize = Saat pertama
  }

  // Method
  terimaNamanya($event: string): void {
    this.namaOrang = $event + " Gaul";
  }

}
