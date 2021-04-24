import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import {MenuItem} from 'primeng/api';
import { CandidateProfileService } from '././candidate-profile.service'
import { Json } from './model/Json'
import {DynamicData} from './model/Json'
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  smartphone: any = [];
    constructor(private urlData: CandidateProfileService,
      private router: Router, private route: ActivatedRoute) {

      this.urlData.fetchData().subscribe(data=> {
        console.log(data);     //api
        this.smartphone= data;
        console.log('aducvbjadnvakhbvnaedvukbsnclkasbk');
        console.log(this.smartphone);
      })

     }

  items: MenuItem[];
  userType:any ;
  userData : Json[];
  userData1 : DynamicData[];
  selectedState: any = null;

states: any[] = [
    {name: 'Developer', value: 'Developer'},
    {name: 'Marketting', value: 'Marketting'},
    {name: 'Accountant', value: 'Accountant'},
    {name: 'UI/ UX Designer', value: 'UI/ UX Designer'},
    {name: 'Recruitment', value: 'Recruitment'},
    // {name: 'Recruitment', value: 'Recruitment'},
];

  newName:any ;     // static home data var
  newPhone:any ;
  newAge:any ;
  newMail:any ;
  newAddress:any ;
  newCountry:any ;
  newPin:any ;
  newAppoint:any ;
  newExperience:any ;
  newCollege:any ;
  newPreComp:any ;
  newFeild:any ;
  newHobby:any ;
  newEduComp:any ;
  newHighStudy:any ;
  newFulltime:any ;
  newLevelExpert:any ;
  newStipendExpt:any ;
  newHoursWork:any ;

// update profile data
  updatedName:any ;
  updatedPhone:any ;
  updatedAge:any ;
  updatedMail:any ;
  updatedAddress:any ;
  updatedCountry:any ;
  updatedPin:any ;
  updatedAppoint:any ;
  updatedExperience:any ;
  updatedCollege:any ;
  updatedPreComp:any ;
  updatedFeild:any ;
  updatedHobby:any ;
  updatedEduComp:any ;
  updatedHighStudy:any ;
  updatedFulltime:any ;
  updatedLevelExpert:any ;
  updatedStipendExpt:any ;
  updatedHoursWork:any ;

  displayAppoint:boolean=  false;
  displayProfile:boolean=  true;
  displaySkill:boolean=  false;



name1= new FormControl('');
mail1= new FormControl('');
name2= new FormControl('');
mail2= new FormControl('');

updateUserForm() {
  console.log(this.name1.value, this.name2.value,
       this.mail1.value, this.mail2.value );
      this.router.navigate(['user']);
}
// ------------------ appointment form

name= new FormControl('');
mail= new FormControl('');
detail= new FormControl('');
phone= new FormControl('');

updateName() {

  let data = new DynamicData('Ghan shyam',this.phone.value,
    23,'mail@outlook.com'
        ,'near 1st street','India',76009,
        this.detail.value, 0.2,'VITAM','Protrainy Edu Limited'
        ,this.selectedState.value,
        'Games , drawing','on-going','Bachelors  Degree',
        'Yes', 6.8, 10000, 9)

 this.newName= data.showName();
 this.newPhone= data.showPhone();
 this.newMail= data.showMail();
 this.newFeild= data.showFeild();
 console.log(this.selectedState.value);
}
// ------------------ end appointment form

// ------------------

// ------------------
ngOnInit(): void {
    let data = new DynamicData('Ghan shyam',90909090, 23,
    'mail@outlook.com'
    ,'near 1st street','India',76009,
      '', 0.2,'VITAM','Protrainy Edu Limited'
      ,'Developer','Games , drawing','on-going',
      'Bachelors  Degree',
      '', 6.8, '10000', '')
  //  console.log(data.showName() );
  //  show details in header
   this.newName= data.showName();
   this.newMail= data.showMail();
   this.newPhone= data.showPhone();
   this.newAge= data.showAge();
   this.newAddress= data.showAddress();
   this.newCountry= data.showCountry();
   this.newPin= data.showPin();
   this.newAppoint= data.showAppoint();
   this.newExperience= data.showExperience();

   this.newCollege= data.showCollege();
   this.newPreComp= data.showPreComp();
   this.newFeild= data.showFeild();
   this.newHobby= data.showHobby();
   this.newEduComp= data.showEduComp();

   this.newHighStudy= data.showHighestEdu();
   this.newFulltime= data.showfulTime();
   this.newLevelExpert= data.showlevelExpert();
   this.newStipendExpt= data.showstipendExpect();
   this.newHoursWork= data.showhourWork();
  //  this.new= data.sho();

  //  appoint form auto fill
  this.name.setValue(this.newName);
  this.mail.setValue(this.newMail);
  this.phone.setValue(this.newPhone);


    this.userData = [
      {
        name:'newGuyu',         //  static data from model file for questions and appointment questions
        phone: 90908890870899,
        age: 2,
        mail:'string3@mail.com',
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

  takeAppointment(){
    if(this.displayProfile ==true || this.displayAppoint
     == true || this.displaySkill == true){
      this.displayAppoint= false;
      this.displayProfile= false;
      this.displaySkill= false;
    }
    else
    this.displayAppoint= true
  }
  takeProfile(){
    if(this.displayProfile ==true || this.displayAppoint
      == true || this.displaySkill == true){
      this.displayAppoint= false;
      this.displayProfile= false;
      this.displaySkill= false;
    }
    else
    this.displayProfile= true
  }

  // -------- demo form below
  // name= new FormControl('');   //template form

  // profileForm = new FormGroup({    //reactive form
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
  //  AppointmentForm = new FormGroup({    //reactive form
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  // });
    // constructor(private data: CandidateProfileService) {
  //   // console.log(this.data.getData());
  //   let item= this.data.getData();          //  static data from service for user profile
  //   this.newName= item.CandidateData[1]['q-1'];
  //  }

  // title = 'formProject';
  // onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   console.warn(this.profileForm.value);
  //   console.warn(this.profileForm['firstName']);
  // }

  cities1: any[] = [];
  cities2: any[] = [];
  city1:any = null;
  city2:any = null;
}

