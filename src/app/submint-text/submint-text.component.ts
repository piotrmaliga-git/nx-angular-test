import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'myorg-submint-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submint-text.component.html',
  styleUrls: ['./submint-text.component.scss'],
})
export class SubmintTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
