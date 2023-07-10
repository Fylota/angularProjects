import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/models/Note';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  notes: Note[] = [
    {
      id: 1,
      title: "First",
      content: "First Note"
    },
    {
      id: 2,
      title: "Second",
      content: "Second Note"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
