import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-navbar',
  imports: [MatMenuModule, RouterLink, MatTabsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.sass',
})
export class Navbar {
  activeLink = '';
}
