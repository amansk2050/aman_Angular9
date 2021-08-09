import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  endPoint = 'hcmSLATablesDetails';
  checkoutForm: FormGroup
  email: any = ""
  password: any = ""
  login = [{ 'email': '1@gmail.com', 'pass': '12345678' },
  { 'email': '2@gmail.com', 'pass': '12345678' },
  { 'email': '3@gmail.com', 'pass': '12345678' },
  { 'email': '4@gmail.com', 'pass': '12345678' }];

  constructor(private formBuilder: FormBuilder, private _userCrud: CrudService, private router: Router) {

    localStorage.setItem('login', JSON.stringify(this.login));

    this.checkoutForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    localStorage.setItem('LoggedIn', JSON.stringify(false));
    localStorage.setItem('UserMail', this.email);
    localStorage.setItem('UserPassword', this.password);
  }
  isTrue: boolean = false;


  async postData() {
    console.log(this.checkoutForm.value.email)
    console.log(this.checkoutForm.value.password)
    let body = {
      email: this.checkoutForm.value.email,
      password: this.checkoutForm.value.password
    }
    console.log("body", body)
    localStorage.setItem("token", "23456fcvnhgherthngw654356y");
    this.router.navigate(['/data'])
    const response = await this._userCrud.addDataAPIs(this.endPoint, body).toPromise();
  }
}
