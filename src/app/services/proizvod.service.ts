import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Proizvod } from '../model/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  constructor(private http:HttpClient) { }
  url:string='https://63b59b2f58084a7af39a1cf4.mockapi.io/vezbanje';

  getData(){
    return this.http.get<Proizvod[]>(this.url)
  }

  delete(id:number){
    return this.http.delete(this.url+'/'+id).subscribe(response=>{
      console.log(response);
    })
  }
}
