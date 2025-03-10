import { Injectable, inject } from "@angular/core";
import { Firestore, collection, doc } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class NoteListService {
  constructor() {}

  firestore = inject(Firestore);
  //itemCollection = collection(this.firestore, 'items');

  getTrashRef() {
    return collection(this.firestore, "notes");
  }

  getNotesRef() {
    return collection(this.firestore, "notes");
  }

  getSingleDocRef(colId: string, docId: string) {
    return doc(collection(this.firestore, colId), docId);
  }
}
