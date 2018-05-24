import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InfluencersComponent } from './admin/influencers/influencers.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "admin/brands", component: BrandsComponent},
  {path: "admin/influencers", component: InfluencersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
