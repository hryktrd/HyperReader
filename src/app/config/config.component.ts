import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  private curConfig: ConfigService;
  private showSaved: boolean=false;
  private showCancelled: boolean=false;
  constructor(private config: ConfigService) {
    this.curConfig = config.clone();
  }

  ngOnInit() {
  }
  async restore(){
    this.curConfig = this.config.clone();
    this.showCancelled = true;
    await sleep(2000);
    this.showCancelled = false;
  }
  async save(){
    this.config.save(this.curConfig); 
    this.showSaved = true;
    await sleep(2000);
    this.showSaved = false;
  }
  bytes: number[] = [15,16,17,18,19,20];
  spans: number[] = [500,400,300,200,100];
}
function sleep(msec):Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true)
    }, msec);
  });
}
