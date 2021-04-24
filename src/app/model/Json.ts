
export class DynamicData{
  name: any;
  phone: any;
  age: any;
  mail: any;
  address: any;
  country: any;
  pincode: any;

  appointmentDetails: any;
  expYrs: any;
  college: any;
  preCompany: any;
  feild: any;
  hobby: any;
  educatnCompl: any;

  highestEducation: any;
  fulTime: any;
  levelExpert: any;
  stipendExpect: any;
  hoursWork: any;

  // feild: any;
  constructor(name: any,phone: any,age: any,mail: any
    ,address: any,country: any,pincode: any,
    appointmentDetails: any,expYrs:any,
    college: any,preCompany: any
    ,feild: any,hobby: any, educatnCompl:any,
    highestEducation:any,fulTime:any,
    levelExpert:any,stipendExpect:any, hoursWork:any){

      this.name = name
      this.phone = phone
      this.age = age
      this.mail = mail
      this.address = address
      this.country = country
      this.pincode = pincode
      this.appointmentDetails = appointmentDetails
      this.expYrs = expYrs
      this.college = college
      this.preCompany = preCompany
      this.feild = feild
      this.hobby = hobby

      this.educatnCompl = educatnCompl
      this.highestEducation = highestEducation
      this.fulTime = fulTime
      this.levelExpert = levelExpert
      this.stipendExpect = stipendExpect
      this.hoursWork = hoursWork
  }
  showName(){
    return (this.name);
      }
      showPhone(){
    return (this.phone);
      }
      showAge(){
    return (this.age);
      }
      showMail(){
    return (this.mail);
      }
      showAddress(){
    return (this.address);
      }
      showCountry(){
    return (this.country);
      }
      showPin(){
    return (this.pincode);
      }
      showAppoint(){
    return (this.appointmentDetails);
      }
       showCollege(){
    return (this.college);
      }
      showPreComp(){
    return (this.preCompany);
      }
      showFeild(){
    return (this.feild);
      }
      showHobby(){
    return (this.hobby);
      }
      showEduComp(){
    return (this.educatnCompl);
      }
      showExperience(){
        return (this.expYrs);
          }
          showHighestEdu(){
        return (this.highestEducation);
          }
          showfulTime(){
        return (this.fulTime);
          }
          showlevelExpert(){
        return (this.levelExpert);
          }
          showstipendExpect(){
        return (this.stipendExpect);
          }
          showhourWork(){
        return (this.hoursWork);
          }

}



export class Json{
  name:string;
  phone:number;
  age:number;
  mail:string;
  address:string;
  country:string;
  pincode:number;
  // appointment:boolean;
  appointmentDetails:string;
  expYrs:number;
  college:string;
  preCompany:string;
  feild:string;
  hobby:string;
  educatnCompl:boolean;
  // q1:string;
  // a1:string;
  // q2:string;
  // a2:string;
  // q3:string;
  // a3:string;
}
