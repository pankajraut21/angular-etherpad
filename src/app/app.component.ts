import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private cookieService: CookieService) { }

    // Set a cookie with SameSite attribute
    setCookie() {
      this.cookieService.set('cookieName', 'cookieValue', undefined, undefined, undefined, false, 'None');
    }

}
