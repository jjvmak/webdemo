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
    'https://github.com/jjvmak/webdemo/blob/master/src/assets/2.jpg',
    'https://github.com/jjvmak/webdemo/blob/master/src/assets/3.jpg',
    'https://github.com/jjvmak/webdemo/blob/master/src/assets/4.jpg',
    'https://github.com/jjvmak/webdemo/blob/master/src/assets/5.jpg',
    'https://github.com/jjvmak/webdemo/blob/master/src/assets/6.jpg'
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
