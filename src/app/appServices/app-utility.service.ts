import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilityService {

  print(count: string, elementID: string){
    let el = document.createElement('li');
    el.innerText = count;

    document.getElementById(elementID)?.appendChild(el);
  }

  constructor() { }
}
