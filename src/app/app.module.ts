import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {GetUserInfoResolver} from './core/resolver/get-user-info.resolver';
import {HeaderModule} from './shared/reusable-modules/header/header.module';
import {SidebarModule} from './shared/reusable-modules/sidebar/sidebar.module';
import { StarComponent } from './feature/star/star.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HeaderModule,
        SidebarModule,
        FormsModule
    ],
  providers: [GetUserInfoResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
