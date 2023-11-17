import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(){}

  ngOnInit(): void {
      
  }






  // parentInput='Initial value';

  // Change the parentInput value to trigger ngOnChanges in the child component
  // changeInput() {
  //   this.parentInput = 'New Value';
  // }

}
