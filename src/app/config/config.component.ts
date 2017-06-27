import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  constructor(private config: ConfigService) {}

  ngOnInit() {
  }
  
  bytes: number[] = [15,16,17,18,19,20];
  spans: number[] = [500,400,300,200,100];
}
