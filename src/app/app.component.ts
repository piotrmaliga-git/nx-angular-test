import { Component, OnInit } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { Tasks } from './shared/models/tasks.model';
import { NgClass, NgFor } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { SubmintTextComponent } from './submint-text/submint-text.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    NgFor,
    NgClass,
    TaskListComponent,
    SubmintTextComponent,
  ],
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  projectOwner = 'Piotrek';
  projectTittle = 'Nauczmy sie Nx + Angular';

  tasks: Tasks[];

  constructor() {
    this.tasks = [
      {
        name: 'name 1',
        done: false,
      },
      {
        name: 'name 2',
        done: true,
      },
    ];
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  public addTask(name: string): void {
    this.tasks.push({
      name,
      done: false,
    });
  }
}
