import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Frog } from '../frog/frog';
import { FrogProvider } from '../../services/frog-provider';

@Component({
  selector: 'app-frog-pictures',
  templateUrl: './frog-pictures.html',
  styleUrl: './frog-pictures.sass',

  imports: [AsyncPipe, Frog],
})
export class FrogPictures {
  constructor(public frogProvider: FrogProvider) {}
}
