import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Frog, FrogType } from '../components/frog/frog';

@Injectable({
  providedIn: 'root',
})
export class FrogProvider {
  ngOnInit(): void {}
  frogs = [
    {
      name: 'froggo',
      size: 3,
      img: 'assets/images/frog1.jpg',
      special: false,
    },
    {
      name: 'forg',
      size: 1,
      img: 'assets/images/frog2.jpg',
      special: false,
    },
    {
      name: 'froggorino',
      size: 2,
      img: 'assets/images/frog3.jpg',
      special: true,
    },
    {
      name: 'le frog',
      size: 1,
      img: 'assets/images/frog4.jpg',
      special: true,
    },
  ];

  frogsPipe = of(this.frogs);
}
