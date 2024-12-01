import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'frontend-config',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './config.component.html',
  styleUrl: './config.component.scss',
})
export class ConfigComponent {
  // Fetch data from database using neo4j
}
