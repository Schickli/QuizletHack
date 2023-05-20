import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  durationInSeconds = 2;
  value: any;
  options: any[] = [];

  ngOnInit(): void {
    // get previous quizlet urls from local storage
    let urls = JSON.parse(localStorage.getItem('urls') as string);
    if (urls != null) {
      this.options = urls;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  learn() {
    // check if the user entered a quizlet url
    if (this.value == undefined) {
      this.openSnackBar('Please enter a valid Quizlet Url', 'Close');
      return;
    }

    if (this.value.includes('quizlet.com')) {
      
      // get previous quizlet urls from local storage
      this.addUrlToLocalStorage(this.value);
      this.router.navigate(['learning'], { state: { quizletUrl: this.value } });
    }
  }

  clearPrevious(){
    localStorage.removeItem('urls');
    this.options = [];
  }

  addUrlToLocalStorage(url: string) {
    let urls = JSON.parse(localStorage.getItem('urls') as string);
    if (urls == null) {
      urls = [];
    }

    // check if the url already exists
    if (urls.includes(url)) {
      return;
    }

    urls.push(url);
    localStorage.setItem('urls', JSON.stringify(urls));
  }
}
