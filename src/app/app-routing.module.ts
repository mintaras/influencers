import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InfluencersComponent } from './influencers/influencers.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "brands", component: BrandsComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "influencers", component: InfluencersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
