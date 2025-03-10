import { Injectable, inject } from "@angular/core";
import { collectionData, Firestore, collection, doc } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class NoteListService {
  // trashNotes: Note[]=[];
  // normalNotes: Note[]=[];

  items$;
  firestrore: Firestore = inject(Firestore);

  constructor() {
    this.items$ = collectionData(this.getNotesRef());
  }

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
