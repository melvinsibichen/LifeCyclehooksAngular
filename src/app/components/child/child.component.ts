import { Component,Input,OnChanges,OnInit,SimpleChanges, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck,  OnDestroy, } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @Input()  value:string='testing';

ngOnChanges(change:SimpleChanges){
console.log('onchanges called');
console.log(change);


}

ngDoCheck(){
  console.log('ngDoCheck called');

 }

 ngAfterContentInit(){
  console.log('ngAfterContentInit called');
 }
 ngAfterContentChecked(){
  console.log(' ngAfterContentChecked called');
 }

 ngAfterViewInit(){
  console.log('  ngAfterViewInit called!!');
 }


 ngAfterViewChecked(){
  console.log('  ngAfterViewChecked called!!');
 }
 

 ngOnDestroy(){
  console.log('  component is  destroyed!!');
 }

  // @Input() data:number;
  // @Input()data2:boolean;

//   constructor(){
//     console.log('Hello from child constructor');
//   }

//   ngOnChanges(changes: SimpleChanges): void {
//     console.log(changes);
//   }
  
ngOnInit(): void {
 
    
}
}
