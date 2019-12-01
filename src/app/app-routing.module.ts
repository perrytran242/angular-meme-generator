import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemeComponent } from './components/meme/meme.component';



const routes: Routes = [
  {path: '', component: MemeComponent},
  {path: '**', component: MemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
