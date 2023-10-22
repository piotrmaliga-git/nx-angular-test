import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tasks } from '../shared/models/tasks.model';

@Component({
  selector: 'myorg-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
  @Input({ required: true }) tasks: Tasks[] = [];

  public changeTaskStatus(task: Tasks, event: Event): boolean {
    console.log(event);

    return (task.done = !task.done);
  }
}
