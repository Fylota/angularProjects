import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { AddNotePageComponent } from './components/pages/add-note-page/add-note-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'addNote', component: AddNotePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
