import { Component } from '@angular/core';
import{FormGroup,FormControl,FormArray, FormBuilder}from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveform1';
<<<<<<< HEAD
loginForm!: FormGroup;
constructor( private _fb: FormBuilder){}
=======
  loginform!:FormGroup;
>>>>>>> a9948b6e7641ed9523be3a5dc56c532706e07326
}
