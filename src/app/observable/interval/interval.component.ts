import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { AppUtilityService } from '../../appServices/app-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.scss'
})
export class IntervalComponent implements OnInit {
  
  videoList: any;

  subscription =new Subscription;
  subscription1 =new Subscription;

constructor(private appService: AppUtilityService){}
  
  ngOnInit(): void {
    //interval(time)
   const broadcastVideo = interval(1000);
    //timer(delay,time)
  const broadcastVideo1 = timer(5000,1000);

  this.subscription = broadcastVideo.subscribe(res=>{
   
    
  if(res > 5){
    this.subscription.unsubscribe();
  }else{
    console.log(res);
    this.videoList = 'Video '+res;
    this.appService.print(this.videoList, 'elContainer');
    
  }

    });

    this.subscription1 = broadcastVideo1.subscribe(res=>{
   
    
      if(res > 5){
        this.subscription1.unsubscribe();
      }else{
        console.log(res);
        this.videoList = 'Video '+res;
        
        this.appService.print(this.videoList, 'elContainer1');
      }
    
        });

    
  }

}
