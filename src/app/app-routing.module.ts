import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: "",
    component: ContactUsComponent,
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    pathMatch: "full"
  }
  , {
    path: "about-us",
    component: AboutComponent,
    pathMatch: "full"
  }
  , {
    path: "services",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "exams",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "signup",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "logout",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "login",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "fees",
    component: TestComponent,
    pathMatch: "full"
  },
  {
    path: "suggestions",
    component: TestComponent,
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
