import { Component, OnInit } from '@angular/core';
import { JavaService } from 'src/app/service/java.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent  {
  courses: any;
  errMsg: any;

  constructor(proService:JavaService){
    proService.getalljavacourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }
}