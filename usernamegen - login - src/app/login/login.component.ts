import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  page: String ="start";
  showLogin(){
    this.page="login"
  }
  showSignUp(){
    this.page="signup"
  }

  propic = "http://cdn.akc.org/content/article-body-image/Hero.jpg"
  ngOnInit() {
  }

}
