import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiencias',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './experiencias.component.html',
  styleUrl: './experiencias.component.css'
})
export class ExperienciasComponent {
  title = "Experiencias Laborales";
}
