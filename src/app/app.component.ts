import { Component } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Todo List';
  todos =  [ 
    { 
      label:'Buy mobile Data',
      done: false,
      priority: 3
    },
    { 
      label:'Pay Mobile Bill',
      done: true,
      priority: 1
    },
    { 
      label:'Go out for Lunch',
      done: false,
      priority: 4
    },
    { 
      label:'Fix the Bulb',
      done: false,
      priority: 5
    }
];

addTodo(newTodoLabel){
  var newTodo = {
    label: newTodoLabel,
    priority: 1,
    done: false
  };
  this.todos.push(newTodo);
}

deleteTodo(todo){
  this.todos = this.todos.filter( t => t.label !== todo.label );
}

}
