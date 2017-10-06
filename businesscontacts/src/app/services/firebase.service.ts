import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from 'angularfire2/firestore';



@Injectable()
export class FirebaseService {

  listings: Observable<any[]>;
  constructor(private db: AngularFirestore) { }

  getListings (){
    this.listings = this.db.collection('/items').valueChanges();
    return this.listings;

  }

}

interface Listing{
  $key?:string;
  title?:string;
  type?:string;
  image?:string;
  city?:string;
  owner?:string;
  bedrooms?:string;
}