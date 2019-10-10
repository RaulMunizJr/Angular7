import { Component, OnInit } from '@angular/core';
import {userGen} from './Shared/userGenerator'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private username: string;
  users = ['Raurautes', 'username1', 'testing', 'blaah'];

  
  userGen(n, e, p){
    n = n.slice(0,3);
    e = e.replace("@", "").slice(0,3);
    p = p.slice(0,3);
    var user = n+e+p;

    if (this.users.includes(user)) {
      user="Username already exists!";
    }
      this.username = user;
}

  constructor(){

  }
  propic = "http://cdn.akc.org/content/article-body-image/Hero.jpg"

}
