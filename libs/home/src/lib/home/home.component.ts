import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from '@conf-demo/design-system';
import { TitleComponent } from '@conf-demo/ui-state';

@Component({
  selector: 'conf-demo-home',
  standalone: true,
  imports: [CommonModule, AccordionComponent, TitleComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
