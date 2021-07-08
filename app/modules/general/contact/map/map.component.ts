import { Component, OnInit } from '@angular/core';
import { WebService } from 'src/app/service/web.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent  {

  courses: any;
  errMsg: any;

  constructor(proService:WebService){
    proService.getallwebcourse().subscribe(
      result => this.courses = result,
      error => this.errMsg = error
    )
    }
}
