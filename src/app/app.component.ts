import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ToDoComponent } from './to-do/to-do.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  standalone: true,
  imports: [CommonModule, ToDoComponent, HeaderComponent, FooterComponent],
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myorg';
  projectOwner = 'Piotrek';
  projectTittle = 'Nauczmy sie Nx + Angular';
}
