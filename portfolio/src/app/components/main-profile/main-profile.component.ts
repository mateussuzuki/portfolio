import { Component } from '@angular/core';

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrl: './main-profile.component.scss'
})
export class MainProfileComponent {
  copyText(id: string) {
    const text = document.getElementById(id)?.textContent;
    if (text) {
      navigator.clipboard.writeText(text)
    }
  }
}
