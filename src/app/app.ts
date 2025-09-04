import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Special } from './components/special/special';
import { FrogPictures } from './components/frog-pictures/frog-pictures';
import { Facts } from './components/facts/facts';
import { FavoriteForm } from './components/favorite-form/favorite-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrogPictures, Facts, Special, FavoriteForm],
  templateUrl: './app.html',
  styleUrl: './app.sass',
})
export class App {
  protected readonly title = signal('Mein Titel');
}
