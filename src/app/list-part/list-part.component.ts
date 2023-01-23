import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Task } from '../services/tasks';

@Component({
  selector: 'app-list-part',
  templateUrl: './list-part.component.html',
  styleUrls: ['./list-part.component.css']
})
export class ListPartComponent implements OnInit {
  // taskService = new Task()

  todo = this.taskService.todo;
  done = this.taskService.done
  
  constructor( private taskService: Task){}

  ngOnInit() {
    this.todo = this.taskService.getTodo();
    console.log(this.todo);
    this.taskService.updatedEvent.subscribe(data => {
      this.todo = data;
      console.log(this.todo);
    })
  }
  

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onDelete(task : string ,status :string){
    const taskService = new Task()

    if(status==='todo'){
      let index:number = this.todo.indexOf(task)
      console.log(index);
      this.todo.splice(index,1)
    }
    if(status==='done'){
      let index:number = this.todo.indexOf(task)
      console.log(index);
      this.done.splice(index,1)
    }
    
    
  }
}
