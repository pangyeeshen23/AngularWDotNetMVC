import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { FruitTableComponent } from './components/fruitTable/fruitTable.component';
import { EmpTableComponent } from './components/empTable/empTable.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FruitvegpageComponent } from './components/fruitvegpage/fruitvegpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FruitTableComponent,
    EmpTableComponent,
    HomepageComponent,
    FruitvegpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
