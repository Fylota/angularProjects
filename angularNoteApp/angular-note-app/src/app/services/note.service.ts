import { Injectable } from '@angular/core';
import { Note } from '../models/Note';
import { NOTES } from './mock-notes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private notes: Note[] = [];

  constructor() { }

  getNotes(): Observable<Note[]> {
    return of(this.notes);
  }

  addNote(note: Note): void {
    this.notes.push(note);
  }

  deleteNote(note: Note): void {
    this.notes = this.notes.filter(n => n !== note);
  }
}
