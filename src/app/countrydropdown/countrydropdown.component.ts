import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrydropdown',
  templateUrl: './countrydropdown.component.html',
  styleUrls: ['./countrydropdown.component.css']
})
export class CountrydropdownComponent implements OnInit {
  states=["option1","option2"];

   country : string=" ";
  
  constructor() { }

  ngOnInit(): void {
  }
  setState()
  {
    if (this.country=="India")
    {
      this.states=["mumbai","delhi","kochi"];
    }
    if (this.country=="Us")
    {
      this.states=["washington","texas","california"];
    }
  }
}
