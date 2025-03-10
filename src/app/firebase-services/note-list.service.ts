import { Injectable, inject } from "@angular/core";
import { Firestore, collection } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class NoteListService {
  constructor() {}

  firestore = inject(Firestore);
  //itemCollection = collection(this.firestore, 'items');
}
