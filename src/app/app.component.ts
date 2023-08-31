import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'
import { ReactiveFormService } from './reactive-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform1';
  loginData: any[] = []
  loginForm!: FormGroup;
  constructor(private _fb: FormBuilder, private _service: ReactiveFormService) { }
  ngOnInit() {
    this.initilizeloginForm();

  }
  initilizeloginForm() {
    this.loginForm = this._fb.group({

      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      address: ['', [Validators.required]],
      mobileNumber: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
    })
  }
  submit(){
    console.log(this.loginForm.value)
  }
  public get firstName(): any {
    return this.loginForm.get('firstName')
  }
  public get lastName(): any {
    return this.loginForm.get('lastName')
  }
  public get email(): any {
    return this.loginForm.get('email')
  }
  public get password(): any {
    return this.loginForm.get('password')
  }
  public get mobile(): any {
    return this.loginForm.get('mobileNumber')
  }
  public get pinCode(): any {
    return this.loginForm.get('pinCode')
  }
}
