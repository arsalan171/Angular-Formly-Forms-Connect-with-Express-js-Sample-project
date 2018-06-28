import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsService } from './forms.service';
@Component({
  selector: 'app-formList',
  templateUrl: './formList.component.html',
  styleUrls: ['./formList.component.css']
})
export class FormListComponent implements OnInit {
  forms: any ;
  title = 'Angular Formly Forms Connect with Express js  and MongoDB Sample project ';
  constructor(private formsService: FormsService, private router: Router) {

    this.formsService.getFormsList().then(res => {
     this.forms = res;
    console.log(res);
    });
   }

  ngOnInit() {
  }

  goFormDetail(id) {
    console.log(id);
    this.router.navigate(['form/' + id]);
  }
}
