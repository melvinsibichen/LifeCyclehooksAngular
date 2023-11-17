import { Component,Input,OnChanges,OnInit,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit,OnChanges {


  // @Input() data:number;
  // @Input()data2:boolean;

  constructor(){
    console.log('Hello from child constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  
ngOnInit(): void {
  console.log('Hello from child ngOnInit');
    
}
}
