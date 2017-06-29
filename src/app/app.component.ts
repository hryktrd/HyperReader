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
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        <a routerLink="" class="navbar-brand" role="button" (click)="selectMenu($event)">{{title}}</a>
      </div>
      <div id="navbar" class="collapse navbar-collapse">
        <ul class="nav navbar-nav">
          <li [class.active]="onMain"><a routerLink="" role="button" (click)="selectMenu($event)">{{mainMenu}}</a></li>
          <li [class.active]="onConfig"><a routerLink="/config" role="button" (click)="selectMenu($event)">{{confMenu}}</a></li> 
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="main" style="padding:90px 15px">
      <router-outlet></router-outlet>
    </div>
  </div>
  `
})
export class AppComponent{
  title = 'hyper reader.';
  mainMenu = 'Main';
  confMenu = 'Config';
  isLoaded: boolean = false;
  onMain: boolean = true;
  onConfig: boolean = false;
  
  selectMenu(event){
    //console.log(event);
    //console.log(event.target.textContent);
    if(event.target.textContent == this.title ||
       event.target.textContent == this.mainMenu){
      this.onMain = true;
      this.onConfig = false;
    }else{
      this.onMain = false;
      this.onConfig = true;
    }
  }
}
