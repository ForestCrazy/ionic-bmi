import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.page.html',
  styleUrls: ['./bmi-calculator.page.scss'],
})
export class BmiCalculatorPage implements OnInit {

  weight: number;
  height: number;
  bmi: number;
  bmiLevel: string;

  constructor() { }

  ngOnInit() {
  }

  bmiCalculator() {
    this.height /= 100;
    this.bmi = this.weight / (this.height * this.height);
    if (this.bmi < 18.5) {
      this.bmiLevel = 'ต่ำกว่าเกณฑ์';
    } else if (this.bmi <= 22.9) {
      this.bmiLevel = 'สมส่วน';
    } else if (this.bmi <= 24.9) {
      this.bmiLevel = 'น้ำหนักเกิน';
    } else if (this.bmi <= 29.9) {
      this.bmiLevel = 'โรคอ้วน';
    } else {
      this.bmiLevel = 'โรคอ้วนอันตราย';
    }
  }

}
