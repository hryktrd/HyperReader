import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {

  constructor() { }
  
  isPointInPrev: boolean = true;
  replacementSpan: number = 500;
  joinUnit: number = 17;
}
