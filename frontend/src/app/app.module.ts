import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsService } from './formList/forms.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormListComponent } from './formList/formList.component';
import { FormDetailComponent } from './formDetail/formDetail.component';

/* Add: Formly */
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
/* Add Material skin  */
import {FormlyMaterialModule} from '@ngx-formly/material';
/* Add bootstrap skin */
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    FormListComponent,
    FormDetailComponent,
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    HttpClientModule,
    HttpModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    FormlyBootstrapModule
  ],
  providers: [FormsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
