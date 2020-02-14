import {Component} from '@angular/core';

@Component({
       selector : 'app-header',
        template : ` 
        
        <div class="header">
  <h1>Webxion</h1>
  <p>A <b>responsive</b> website created by me.</p>
</div>

<div class="navbar">
  <a [routerLink]="['home']" class="active">Home</a>
  <a [routerLink]="['about']">About-Us</a>
  <a [routerLink]="['contact']">Contact-us</a>
  <a   class="right">Link</a>
</div>
     `
})

export class HeaderComponent {

}