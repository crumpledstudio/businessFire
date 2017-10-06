import { Component } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
//import { FirebaseService } from './services/firebase.service';

//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument  } from 'angularfire2/firestore';

/*
export interface Todo {
  id?: string;
  description: string;
  completed: boolean;
}*/
/*
export interface ItemsList {
  id?: string;
  nome?: string;
	body?: string;
	description?: string;
	likes?: number;
}
*/
export interface CardsList {
  id?: string;
  name?: string;
  imgUrl?: string;
  description?: string;
  likes?: number;
  price?: number;
  
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
  /*
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
  */
  // - Cards List
  cardsInfoCollectionRef: AngularFirestoreCollection<CardsList>;
  cards: Observable<CardsList[]>;
  constructor(private afs: AngularFirestore){
    this.cardsInfoCollectionRef = this.afs.collection<CardsList>('cardsInfo');
    this.cards = this.cardsInfoCollectionRef.valueChanges();
  
  // - Items List
  /*
  itemsCollectionRef: AngularFirestoreCollection<ItemsList>;
  items: Observable<ItemsList[]>;
  constructor(private afs: AngularFirestore){
    this.itemsCollectionRef = this.afs.collection<ItemsList>('items');
    this.items = this.itemsCollectionRef.valueChanges();
    */
    /*
    this.items = this.itemsCollectionRef.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data() as ItemsList;
        const id = action.payload.doc.id;
        return { id, ...data };
      });
    });
    */
  }

}
