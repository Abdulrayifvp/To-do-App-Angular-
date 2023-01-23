
import { Injectable, EventEmitter } from "@angular/core"
@Injectable({
    providedIn: 'root',
})
export class Task {
    updatedEvent = new EventEmitter()
    todo = ['Get to work', 'Fall asleep'];

    done = ['Get up', 'Brush teeth', 'Take a shower',];

    push(a: string) {
        // console.log(this.todo);
        this.todo.push(a);
        this.updatedEvent.emit(this.todo);
    }

    getTodo() {
        return this.todo.slice();
    }
}