import { Component, Input } from '@angular/core';
import { Magnifier } from '../../directives/magnifier';

@Component({
  selector: 'app-frog',
  imports: [Magnifier],
  templateUrl: './frog.html',
  styleUrl: './frog.sass',
})
export class Frog {
  @Input() frog: FrogType = { name: '', size: 0, img: '', special: false };
}

export type FrogType = {
  name: string;
  size: number;
  img: string;
  special: boolean;
};
