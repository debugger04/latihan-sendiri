import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input("titleChild") title:string = '';

  namaOrang: string = '';
  @Output() namaOrangEmitter: EventEmitter<string> = new EventEmitter<string>();

  @Input() umur: number = 0; // Orang 1
  @Output() umurChange: EventEmitter<number> = new EventEmitter<number>(); // Topik Obrolan

  constructor() { }

  ngOnInit(): void {
  }

  kirimNamaOrang() : void {
    this.namaOrang = 'Nabz';
    this.namaOrangEmitter.emit(this.namaOrang);
  }

  kirimUmur() : void {
    this.umur = 10;
    const hasil = this.umur * 2;
    this.umurChange.emit(hasil);
  }

}
