import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsService } from '../formList/forms.service';
@Component({
  selector: 'app-formDetail',
  templateUrl: './formDetail.component.html',
  styleUrls: ['./formDetail.component.css']
})
export class FormDetailComponent implements OnInit {
  form = new FormGroup({});
 // model = { email: 'email@gmail.com' };
    fields: FormlyFieldConfig[] = [];

    constructor(private formsService: FormsService, private router: Router, private activatedRoute: ActivatedRoute) {
          var id = this.activatedRoute.snapshot.paramMap.get('id');
          this.formsService.getFormDetail(id).then(res => {
          console.log(res);
          this.fields = res.fields;
          });
         }

  ngOnInit() {
  }

  submit(model) {
    console.log(model);
  }
}
