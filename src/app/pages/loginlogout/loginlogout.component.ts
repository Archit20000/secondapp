import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-loginlogout',
  templateUrl: './loginlogout.component.html',
  styleUrls: ['./loginlogout.component.css']
})
export class LoginlogoutComponent implements OnInit {

  email="";
  password="";

  email1="";
  password1="";

  error="";
  show=false;
  img="https://www.vibrantacademy.com/user/img/login.png";
  
  constructor(private authservice:AuthService,private router : Router) { }

  ngOnInit(): void {
  }

  login(){

    this.authservice.signinwithemail(this.email,this.password);
  }

  register(){
    this.authservice.registerwithemail(this.email1,this.password1);

  }

    
}
