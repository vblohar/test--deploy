import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { AppUtilityService } from '../../appServices/app-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrl: './of-from.component.scss'
})
export class OfFromComponent implements OnInit {

  // name: string = '';

  constructor(private appService: AppUtilityService){}
  
  ngOnInit(): void {
    let obs1 = of('Abhay', 'Neeraj', 'Vaibhav', 'Shailesh');
    let obs2 = of({a:'Abhay', b:'Neeraj', c:'Vaibhav', d:'Shailesh'});


    obs1.subscribe(res=>{
      console.log(res);
      // this.name =res;
      this.appService.print(res, 'listContainer');
    })

    obs2.subscribe(res=>{
      console.log(res);
      // this.name =res;
      
    })
  }
  
 

}
