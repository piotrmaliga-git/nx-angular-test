import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'myorg-submit-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-text.component.html',
  styleUrls: ['./submit-text.component.scss'],
})
export class SubmitTextComponent {
  @Output() submitText = new EventEmitter<string>();
}
