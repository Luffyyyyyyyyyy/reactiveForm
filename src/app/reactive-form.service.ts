import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ReactiveFormService {

  constructor(private _http : HttpClient ) { }
  
  login(body : any) {
    return this._http.post('http://localhost:3000/posts',body)
  }
  getData () {
    return this._http.get('http://localhost:3000/posts')
  }

}
