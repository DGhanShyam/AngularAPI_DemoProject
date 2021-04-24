import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class CandidateProfileService {

  constructor(private http:HttpClient) { }

  fetchData(){
    let url= "https://jsonplaceholder.typicode.com/todos/";
    return this.http.get(url);
  }

  getData(){
    return {
      CandidateData: {
        1: {
          number: 7077460543,
          profile: {
            name: 'shyam',
            age: 22,
            mail: 'mail@mail.com',
            address: 'mail@mail.com',
            country: 'mail@mail.com',
            pincode: 768879,
          },
          appointment: false,
          q1:  'What is web design ?',
          q1a:  'anser 1',
          q2:  'What is responsiveweb design ?',
          q2a:  'answer 2',


        },

         "2": {
          "number": 7073340543,
          "profile": {
            "name": 'ghan',
            "age": 22,
            "mail": 'mail@mail.com',
            "address": 'mail@mail.com',
            "country": 'mail@mail.com',
            "pincode": 768879,
          },
          "appointment": false,
          "skill": {
            "What is web design ?": '',
            "What is responsive design ?": '',
            "What is responsive web design ?": '',
            "What is UI/ UX design ?": '',
          }
        },

    },

  }
}
}
