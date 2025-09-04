import { Component } from '@angular/core';
import { FrogProvider } from '../../services/frog-provider';

@Component({
  selector: 'app-special',
  imports: [],
  templateUrl: './special.html',
  styleUrl: './special.sass',
})
export class Special {
  constructor(public frogProvider: FrogProvider) {}

  clicked: boolean = false;

  displayfrogIndex = 0;
  displayfrog = { name: '', size: 0, img: '', special: false };

  ngOnInit(): void {
    this.displayfrog = this.frogProvider.frogs[this.displayfrogIndex];
  }
  handleClick() {
    this.clicked = !this.clicked;
    this.displayfrogIndex = (this.displayfrogIndex + 1) % 4;
    this.displayfrog = this.frogProvider.frogs[this.displayfrogIndex];
  }
}
