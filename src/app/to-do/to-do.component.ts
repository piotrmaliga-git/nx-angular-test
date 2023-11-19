import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Tasks } from '../shared/models/tasks.model';
import { SubmitTextComponent } from './submit-text/submit-text.component';
import { TaskListComponent } from './task-list/task-list.component';

type InitState = {
  state: 'init';
};

type LoadingState = {
  state: 'loading';
};

type successState = {
  state: 'success';
  results: Tasks[];
};

type ErrorState = {
  state: 'error';
  error: ListFetchingError;
};

type ComponentListState = InitState | LoadingState | successState | ErrorState;

type ListFetchingError = { status: number; message: string };

@Component({
  selector: 'myorg-to-do',
  standalone: true,
  imports: [TaskListComponent, SubmitTextComponent, CommonModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent implements OnInit {
  tasks: Tasks[] = [];

  loading = true;

  sucessfetching = true;

  statusSuccess = 200;
  messageSuccess = 'fetched successfully';

  statusError = 404;
  messageError = 'fetched filed!!';

  listState: ComponentListState = { state: 'init' };

  private readonly URL = 'http://localhost:3000';

  constructor() {
    // this.listState = { state: 'loading' };
    // console.log(this.tasks);
    // const jsonfileUrl = 'db.json';
    // if (Array.isArray(this.tasks)) {
    //   this.listState = {
    //     state: 'success',
    //     results: this.tasks,
    //   };
    // } else {
    //   this.listState = {
    //     state: 'error',
    //     error: { status: this.statusError, message: this.messageError },
    //   };
    // }
  }

  public addTask(name: string): void {
    // this.tasks.push({
    //   id,
    //   name,
    //   done: false,
    // });
  }
}
