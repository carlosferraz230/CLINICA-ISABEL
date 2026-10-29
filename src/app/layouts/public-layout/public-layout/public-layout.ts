import { Component } from '@angular/core';
import { TopBarComponent } from '../../../shared/api/components/top-bar-component/top-bar-component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/api/components/footer-component/footer-component';

@Component({
  imports: [
    TopBarComponent,
    RouterOutlet,
    FooterComponent
],
  selector: 'app-public-layout',
  styleUrl: './public-layout.scss',
  templateUrl: './public-layout.html',
})
export class PublicLayout {}
