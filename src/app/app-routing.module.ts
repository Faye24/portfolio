import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path: 'profile', component:ProfileComponent},
  {path: 'gallery', component:GalleryComponent},
  {path: 'contact', component:ContactComponent},
  {path: '**', redirectTo: 'profile'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
