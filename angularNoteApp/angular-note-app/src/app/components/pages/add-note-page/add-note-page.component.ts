import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Note } from 'src/app/models/Note';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-add-note-page',
  templateUrl: './add-note-page.component.html',
  styleUrls: ['./add-note-page.component.css']
})
export class AddNotePageComponent implements OnInit {

  model = new Note("", "");

  constructor(
    private noteService: NoteService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() { 
    this.addNote(this.model);
  }

  addNote(newNote: Note) {
    this.noteService.addNote(newNote);
    this.router.navigate([""]);
  }

}
