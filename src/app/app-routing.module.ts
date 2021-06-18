import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegformComponent } from './regform/regform.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FeedbackComponent } from './feedback/feedback.component';
const routes: Routes = [
  { path : 'home_page', component : HomepageComponent },
  { path: '', redirectTo: 'home_page', pathMatch: 'full'},
  { path : 'registraion', component : RegformComponent },
  { path : 'contact_us', component: ContactUsComponent },
  { path : 'about_us', component: AboutUsComponent },
  { path : 'sign_in', component: SignInComponent },
  { path : 'feedback', component: FeedbackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
