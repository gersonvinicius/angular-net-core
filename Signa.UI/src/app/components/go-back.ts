import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'back-button',
    template: `<button (click)="goBack()" >Back</button>`,
})
export class BackButtonComponent {
  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
