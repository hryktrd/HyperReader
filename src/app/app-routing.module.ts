import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// routing
import { MainComponent } from './main/main.component';
import { ConfigComponent } from './config/config.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'config', component: ConfigComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
