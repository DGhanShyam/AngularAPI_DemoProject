import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Json } from '../model/Json'
import { DynamicData } from '../model/Json'
import  {UserInfoHeaderComponent} from '../user-info-header/user-info-header.component'

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  selectedState: any = null;
  userData : Json[];
  userData1 : DynamicData[];
  // userName:any;
  userInfoHeader: UserInfoHeaderComponent;


  firstname= new FormControl('');
  mail= new FormControl('');
  detail= new FormControl('');
  contact= new FormControl('');
  // feild= new FormControl('');

  updateName( ){
    let data = new UserInfoHeaderComponent();
    console.log(this.firstname.value);
    console.log('appointment updatename');
    data.updatedData(this.firstname.value)
}

constructor() { }

  ngOnInit() {
    // let data = new DynamicData('newdynamic',30000.00)
    // console.log(data.showName() );
    // this.userName= data.showName();

    this.userData = [
      {
        name: this.firstname.value,         //  static data from model file for questions and appointment questions
        phone: this.contact.value,
        age: 22,
        mail: this.firstname.value,
        address:'1st street near street ',
        country:'india',
        pincode: 92610,
        appointmentDetails: '',
        expYrs: 3,
        college: 'stri',
        preCompany:'string',
        feild:'Web development ',
        hobby:'string',
        educatnCompl: false
      },
    ]
  }

  feild: any[] = [
    {name: 'Developer', code: 'Arizona'},
    {name: 'Marketting', value: 'California'},
    {name: 'Recruitment', code: 'Florida'},
    {name: 'Accounting', code: 'Ohio'},
    {name: 'UI/ UX Developer', code: 'Washington'},
    {name: 'others..', code: 'asdsa'},
];

cities1: any[] = [];

cities2: any[] = [];

city1:any = null;

city2:any = null;
}
