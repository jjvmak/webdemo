import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  slideIndex = 0;
  imgUrl = '';
  imgArray: string[] = [
    '../../assets/2.jpg',
    '../../assets/3.jpg',
    '../../assets/4.jpg',
    '../../assets/5.jpg',
    '../../assets/6.jpg'
  ];
  constructor() { }

  ngOnInit() {
    this.showSlides(this.slideIndex);
  }

  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n) {
    if (n < 0) {
      this.slideIndex = this.imgArray.length - 1;
    }

    if (n > this.imgArray.length - 1) {
      this.slideIndex = 0;
    }

    this.imgUrl = this.imgArray[this.slideIndex];
  }

}
