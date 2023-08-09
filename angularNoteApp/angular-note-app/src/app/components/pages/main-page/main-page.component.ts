import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  notes: Note[] = [];

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.noteService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

  deleteNote(note: Note): void {
    this.noteService.deleteNote(note);
    this.getNotes();
  }

}
