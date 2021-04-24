import { Component, OnInit } from '@angular/core';
import { Json } from '../model/Json'
import { DynamicData } from '../model/Json'

@Component({
  selector: 'app-user-info-header',
  templateUrl: './user-info-header.component.html',
  styleUrls: ['./user-info-header.component.css']
})
export class UserInfoHeaderComponent implements OnInit {
  userData : Json[];
  userData1 : DynamicData[];
  // name= 'newGuy';
  userName:any;

  updatedData(namee:any){
    // let data = new DynamicData(namee,30000.00)
    console.log('user-info updatadata', namee);
    this.userName= namee;
  }
  constructor() { }

  ngOnInit(): void {
  //   let data = new DynamicData('namedynamic',30000.00)
  //  console.log(data.showName() );
  //  this.userName= data.showName();

    this.userData = [
      {
        name:'newGuyu',         //  static data from model file for questions and appointment questions
        phone: 90908890870899,
        age: 2,
        mail:'string@mail.com',
        address:'1st street near street ',
        country:'india',
        pincode: 90,
        appointmentDetails: 'details..',
        expYrs: 3,
        college: 'stri',
        preCompany:'string',
        feild:'Web development ',
        hobby:'string',
        educatnCompl: false
      },
    ]
  }

}
