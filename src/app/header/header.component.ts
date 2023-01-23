import { Component , Output ,EventEmitter } from '@angular/core';
import { Task } from '../services/tasks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  task :string = '';

  constructor( private taskService: Task) {}

  addTask(){

    if(this.task === ''){
      alert('Please fill the field!');
    }else{
      // const TaskLIst = new Task();

      // TaskLIst.push(this.task);
      this.taskService.push(this.task);
      this.task=''
      
      
    }
    
  }
}
