import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(public id: number, public description: string, public done: boolean, public targetDate: Date) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: string
  // [
  //   new Todo(1, 'Dance', false, new Date()),
  //   new Todo(2, 'Sing', false, new Date()),
  //   new Todo(3, 'Read', false, new Date())
  //   /* {id: 1, description: 'Dance'},
  //   {id: 2, description: 'Sing'},
  //   {id: 3, description: 'Read'} */
  // ]
  constructor(private todoService: TodoDataService, private router: Router) { }

  ngOnInit(): void {
    this.refreshPage()
  }

  refreshPage() {
    this.todoService.getAllTodos("user").subscribe(response => {
      console.log('response')
      this.todos = response
    })
  }

  deleteTodo(id) {
    this.todoService.deleteTodo('user', id).subscribe(response => {
      this.message = `Deletion of ${id} is Successful!`
      this.refreshPage()
    })
  }

  updateTodo(id) {
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }

}
