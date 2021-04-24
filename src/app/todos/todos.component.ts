import { Component, OnInit } from '@angular/core';
import {Todo} from './../model/Todo'
import { CandidateProfileService } from '../candidate-profile.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  name:any;
  inputTodo:string = "";

  newName:string=  'newGuy';
  constructor(private data: CandidateProfileService) {
    console.log(this.data.getData());
    let item= this.data.getData();    //  static data
    // this.name= item.name;
   }

  ngOnInit(): void {
    this.todos = [
      {
        content: this.newName,
        completed: false
      },
      {
        content: '',
        completed: false
      }
    ]
  }

  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }

  deleteTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = "";
  }

}
