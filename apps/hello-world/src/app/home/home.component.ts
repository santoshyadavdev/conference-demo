import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '@conf-demo/design-system';

@Component({
  selector: 'conf-demo-home',
  standalone: true,
  imports: [CommonModule, AccordionComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
