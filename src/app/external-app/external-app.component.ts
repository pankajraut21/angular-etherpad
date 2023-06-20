import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-external-app',
  templateUrl: './external-app.component.html',
  styleUrls: ['./external-app.component.css']
})
export class ExternalAppComponent implements AfterViewInit {
  @ViewChild('myIframe', { static: false })
  iframeRef!: ElementRef;
  iframeSrc: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
    private cookieService: CookieService) {
      this.iframeSrc = this.sanitizer.bypassSecurityTrustResourceUrl('http://127.0.0.1:9001');
      this.cookieService.set('cookieName', 'cookieValue', undefined, undefined, undefined, false, 'None');
    }

  ngAfterViewInit() {
    const iframe = this.iframeRef.nativeElement;
    iframe.addEventListener('load', this.handleIframeLoad.bind(this));
  }

  handleIframeLoad() {
    console.log('Iframe loaded...!');
  }

}
