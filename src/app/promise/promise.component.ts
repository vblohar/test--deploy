import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrl: './promise.component.scss'
})
export class PromiseComponent implements OnInit {
mobIsAvailable: any;

  vivoAvailable(){
    return true;
  }

  miAvailable(){
    return false;
  }

  ngOnInit(): void {

       let purchase = new Promise((resolve, reject) =>{
      // resolve('Resolve Successfully');
      // reject('Promise is rejected')

      if(this.vivoAvailable()){
        resolve('Vivo mobile is available.');
      }else if(this.miAvailable()){
        resolve('Mi mobile is available.');
      }else {
        reject('Mobile is not available.');
      }
    });

    

    purchase.then(res=>{
      console.log(res);
      this.mobIsAvailable = res;
    }).catch(error=>{
      console.log(error);
      this.mobIsAvailable = error;
    })
    
  }
  // onClick(){
  //   console.log('In promise');
  // }

}
