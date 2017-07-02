import { Component } from '@angular/core';
/// <reference path="mecab.d.ts"/>

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <a href="https://github.com/n-fukuju/HyperReader"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png"></a>
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
