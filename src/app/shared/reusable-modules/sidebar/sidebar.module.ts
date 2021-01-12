import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { SidebarComponent } from './sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [SidebarComponent],
    exports: [
        SidebarComponent
    ],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    ReactiveFormsModule
  ]
})
export class SidebarModule { }
