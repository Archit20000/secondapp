import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.css']
})
export class LoginlogoutComponent implements OnInit {

  email="";
  password="";

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    alert("hyy "+this.email);
  }

    
}
