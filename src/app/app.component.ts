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

  loginForm!: FormGroup;
  loginData : any = []
  constructor(private _fb: FormBuilder, private _service: ReactiveFormService) { }
  ngOnInit(): void {
    this.initilizeloginForm();
    this.getapiData()
  }

  initilizeloginForm() {

    this.loginForm = this._fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  submit(){
    // this.loginData.push(this.loginForm.value)
    // console.log(this.loginData)

    this._service.login(this.loginForm.value)
    .subscribe((res) =>{
      console.log(res)
    })
    this.loginForm.reset();
  }


  getapiData() {
    this._service.getData()
    .subscribe((res) =>{
      console.log(res)
      this.loginData = res
      console.log(this.loginData)
    })
  }






}


