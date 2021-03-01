import { Component } from '@angular/core';
import { environment } from  '../environments/environment';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chat-test';
  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}

