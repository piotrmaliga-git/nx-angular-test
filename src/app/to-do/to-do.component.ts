import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { SubmitTextComponent } from './submit-text/submit-text.component';
import { Tasks } from '../shared/models/tasks.model';

@Component({
  selector: 'myorg-to-do',
  standalone: true,
  imports: [TaskListComponent, SubmitTextComponent],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent {
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

  public addTask(name: string): void {
    this.tasks.push({
      name,
      done: false,
    });
  }
}
