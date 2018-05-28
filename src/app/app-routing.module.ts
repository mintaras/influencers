import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './admin/brands/brands.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InfluencersComponent } from './admin/influencers/influencers.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "contacts", component: ContactsComponent},
  {path: "admin/login", component: SignInComponent},
  {path: "admin/dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  {path: "admin/brands", component: BrandsComponent, canActivate: [AuthGuard]},
  {path: "admin/influencers", component: InfluencersComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
