import { AfterViewInit, Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AppUtilityService } from '../../appServices/app-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrl: './from-event.component.scss'
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('btnClick')
  btnClick!: ElementRef;

  count = 1;

  constructor(private appService: AppUtilityService){}
  
  ngAfterViewInit(): void {
    
    fromEvent(this.btnClick.nativeElement, 'click').subscribe(res=>{
      let countDone = 'video ' + this.count++;

      this.appService.print(countDone,'element1');
      this.appService.print(countDone,'element');
    })
  }

  

}
 