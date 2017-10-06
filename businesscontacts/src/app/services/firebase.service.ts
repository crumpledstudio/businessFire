import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


interface ItemsList {
  id?:string;
  nome?:string;
	body?:string;
	description?:string;
	likes?:number;
}

@Injectable()
export class FirebaseService {
  /*
  listings: Observable<any[]>;
  constructor(private db: AngularFirestore) { }

  getListings (){
    this.listings = this.db.collection('/items').valueChanges();
    return this.listings;

  }
  */
  itemsCollectionRef: AngularFirestoreCollection<ItemsList>;
  items: Observable<ItemsList[]>;
  constructor(private afs: AngularFirestore){
    this.itemsCollectionRef = this.afs.collection<ItemsList>('items');
    this.items = this.itemsCollectionRef.valueChanges();
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

/*
interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}
*/

