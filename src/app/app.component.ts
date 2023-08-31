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
  public get name(): any {
    return this.loginForm.get('name')
  }
  public get email(): any {
    return this.loginForm.get('email')
  }
  public get password(): any {
    return this.loginForm.get('password')
  }
}
