import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;


  constructor(private afu: AngularFireAuth,private router : Router) { 
    this.afu.authState.subscribe((auth)=>{
      this.authState=auth;
    })
  }

  registerwithemail(email:string,password:string){
   this.afu.createUserWithEmailAndPassword(email,password).then((user)=>{
    this.authState=user;
    this.router.navigate(['/home']);
 }).catch((error)=>{
   alert(error.message);
 });
  }

  signinwithemail(email:string,password:string){
    this.afu.signInWithEmailAndPassword(email,password).then((user)=>{
     this.authState=user;
     this.router.navigate(['/home']);
  }).catch((error)=>{
    console.log(error);
    alert(error.message);
    
  });
   }

   

  logout()
  {
    this.afu.signOut().then((user)=>{
      this.authState=null;
      this.router.navigate(['/login']);
    }).catch(error=>{
      alert("can not logout");
    })
  }
}
