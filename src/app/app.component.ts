import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    emails=[
        {email:'sadie@pomeranian.com',importance:true,subject:'I AM CUTE',content:'bork bork bork'},
        {email:'fifi@poodle.com',importance:false,subject:'Heavy Metal Playlist',content:'boof'},
        {email:'hugo@bulldog.com',importance:true,subject:'Leslie\'s dog',content:'wooooof'},
        {email:'deedles@lhasa.apso',importance:false,subject:'so cute',content:'wooofer'}
    ];
}
