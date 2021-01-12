import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [HeaderComponent],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    ReactiveFormsModule
  ]
})
export class HeaderModule { }
