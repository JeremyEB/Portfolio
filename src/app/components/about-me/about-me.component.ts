import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {
  developerOcuppation = "</>Fullstack Developer / Administrador de Base de Datos</>"
}
