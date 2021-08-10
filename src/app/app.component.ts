import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'คำนวนดัชนีมวลกาย', url: 'bmi_calculator', icon: 'mail' },
    { title: 'ผู้จัดทำ', url: 'creator', icon: 'paper-plane' },
  ];
  public labels = [];
  constructor() {}
}
