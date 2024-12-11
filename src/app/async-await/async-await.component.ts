import { Component } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrl: './async-await.component.scss'
})
export class AsyncAwaitComponent {

  Vivo =[{
    brand: "Vivo",
    ram: "2 GB",
    color: "White"
  }]

  promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(this.Vivo);}
      ,3000);
  });

  async Async(){

    let data = await this.promise;
    // console.log(data);
    return data;
  }

  clickMe(){
    console.log(this.Async().then(data=>{console.log(data)}));
  }

  result1: HTMLElement | null = null;
  result2: HTMLElement | null = null;
  result3: HTMLElement | null = null;

// prmoise example
  fetch1(){

    this.result1 = document.getElementById('result1') as HTMLElement;
    this.result1.innerText = 'Fetching Data......';

    this.promise.then(res=>{
      console.log(res);

      if(this.result1){
       this.result1.innerText = JSON.stringify(res);
      }
      
    });

  }
//async and await
  async fetch2(){
    this.result2 = document.getElementById('result2') as HTMLElement;
    this.result2.innerText = 'Fetching Data......';

    let res = await this.promise;
    if(this.result2){
      this.result2.innerText = JSON.stringify(res);
     }

   
  }

  //fetching API
  fetch3(){
    this.result3 = document.getElementById('result3') as HTMLElement;
    this.result3.innerText = 'Fetching Data......';

    if(this.result3){
      let data = fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));

      this.result3.innerText = JSON.stringify(data); 
    }

   
  }

  

}
