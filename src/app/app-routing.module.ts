import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routing
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'config', component: ConfigComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
