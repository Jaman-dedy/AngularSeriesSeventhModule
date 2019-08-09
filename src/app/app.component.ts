import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) signupFrom: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secreQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;
  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupFrom.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })
    this.signupFrom.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  onSubmit() {
    this.submitted = true;
    this.user.username = this.signupFrom.value.userData.username;
    this.user.email = this.signupFrom.value.userData.email;
    this.user.secreQuestion = this.signupFrom.value.userData.secret;
    this.user.answer = this.signupFrom.value.userData.questionAnswer;
    this.user.gender = this.signupFrom.value.userData.gender;

    this.signupFrom.reset();
  }
}
