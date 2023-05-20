import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'conf-demo-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {}
