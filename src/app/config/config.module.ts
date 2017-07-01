import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigRoutingModule } from './config-routing.module';
import { ConfigComponent } from './config.component';

// Form
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ConfigRoutingModule,
    FormsModule
  ],
  declarations: [ConfigComponent]
})
export class ConfigModule { }
