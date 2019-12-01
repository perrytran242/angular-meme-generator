import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(
    private http: HttpClient
  ) {}

  getMemes() {
    this.http.get('https://api.imgflip.com/get_memes').subscribe( res => {
      console.log(res);
    });
  }
}
