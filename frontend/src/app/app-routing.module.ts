import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormDetailComponent } from './formDetail/formDetail.component';
import { FormListComponent } from './formList/formList.component';

const formsRoutes: Routes = [
  { path: 'forms',  component: FormListComponent , outlet: '' },
  { path: 'form/:id', component: FormDetailComponent },
  { path: '',   redirectTo: '/forms',  pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(formsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }