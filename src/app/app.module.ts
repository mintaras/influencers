import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';

import * as Parse from 'parse';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { BrandsComponent } from './brands/brands.component';
import { InfluencersComponent } from './influencers/influencers.component';
import { InfluencersDialogComponent } from './home/influencers-dialog/influencers-dialog.component';
import { BrandsDialogComponent } from './home/brands-dialog/brands-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    SignInComponent,
    HeaderComponent,
    FooterComponent,
    BrandsComponent,
    InfluencersComponent,
    InfluencersDialogComponent,
    BrandsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    [ModalModule.forRoot()],
    [BsDatepickerModule.forRoot()]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    Parse.initialize('caAppId');
    Parse.serverURL = 'http://localhost:4205/parse/';
  }
}
