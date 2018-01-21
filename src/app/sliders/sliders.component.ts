import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  styleUrls: ['./sliders.component.css']
})
export class SlidersComponent implements OnInit {
  lollero = 1000;
  lollero2 = 12;
  lollero3 = this.lollero / this.lollero2;
  constructor() { }

  ngOnInit() {
    const num = this.lollero / this.lollero2;
    this.lollero3 = Math.round(num * 100) / 100;
  }

  onSlide() {
    const num = this.lollero / this.lollero2;
    this.lollero3 = Math.round(num * 100) / 100;
  }

}
