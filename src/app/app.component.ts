import { Component } from '@angular/core';
/// <reference path="mecab.d.ts"/>

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a routerLink="" class="navbar-brand" role="button">{{title}}</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li class="active"><a routerLink="" role="button">Main</a></li>
          <li><a routerLink="/config" role="button">Conf</a></li> 
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="main" style="padding:90px 15px">
      <label>status:</label><label id="status">{{isLoaded}}</label><br>
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent {
  title = 'hyper reader.';
  isLoaded: boolean = false;
  
}
