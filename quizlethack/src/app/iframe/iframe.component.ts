import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss'],
})
export class IframeComponent {
  srcUrl: SafeResourceUrl | undefined;
  url = ""

  constructor(private sanitizer: DomSanitizer, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state as { quizletUrl: string };
    this.url = state.quizletUrl;

    this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit(): void {
  }
}
