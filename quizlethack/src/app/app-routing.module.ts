import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'learning', component: IframeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
