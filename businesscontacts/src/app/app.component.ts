import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

export interface Todo {
  id?: string;
  description: string;
  completed: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*
  title = 'app';
  items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('items').valueChanges();
  }
  
  ngOnInit() {

  }
  */
  todoCollectionRef: AngularFirestoreCollection<Todo>;
  todos: Observable<Todo[]>;
  constructor(private afs: AngularFirestore){
    this.todoCollectionRef = this.afs.collection<Todo>('todos');
    //this.todos = this.todoCollectionRef.valueChanges();
    this.todos = this.todoCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as Todo;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
  }

  // Add Todo
  addTodo(todoDesc: string) {
    if (todoDesc && todoDesc.trim().length) {
      this.todoCollectionRef.add({ description: todoDesc, completed: false });
    }
  }

  // Update Todo
  updateTodo(todo: Todo) {
    this.todoCollectionRef.doc(todo.id).update({ completed: !todo.completed });
  }

  // Delete Todo
  deleteTodo(todo: Todo) {
    this.todoCollectionRef.doc(todo.id).delete();
  }


}
