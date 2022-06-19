import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //title = 'my-store';
  name = 'Diego';
  age = 38;
  img = 'http://pm1.narvii.com/6768/d8ff2425524a6c384a894ce462dc21374e2e5f6fv2_00.jpg';
  btnDisable = true;

  person = {
    name : 'Diego',
    age : 38,
    avatar : 'http://pm1.narvii.com/6768/d8ff2425524a6c384a894ce462dc21374e2e5f6fv2_00.jpg'
  }

}
