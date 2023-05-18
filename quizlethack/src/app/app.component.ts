import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'quizlethack';

  constructor(
    private router: Router,
    private clipboard: Clipboard,
    private _snackBar: MatSnackBar
  ) {}

  shareUrl() {
    this.clipboard.copy('https://quizlet-hack.vercel.app/');
    this.openSnackBar('Url copied. Share it with your friends! :)', 'Close');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  goHome() {
    this.router.navigate(['']);
  }
}
