import { Routes } from '@angular/router';
import { Frog } from './components/frog/frog';
import { FrogPictures } from './components/frog-pictures/frog-pictures';
import { Sandfall } from './components/sandfall/sandfall';

export const routes: Routes = [
  { path: '', component: Frog },
  { path: 'home', component: Frog },
  { path: 'pictures', component: FrogPictures },
  { path: 'favorite', component: Frog },
  { path: 'sandfall', component: Sandfall },
];
