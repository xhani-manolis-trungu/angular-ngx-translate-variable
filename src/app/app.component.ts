import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hardcoded: string;
  fromVariable: string;
  days = '30';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');

   // Value Hardcoded
    this.translate.get('UPCOMING_RENEWALS', { output: '20' }).subscribe((s: string) => {
      this.hardcoded = s;
    });

    // value from variable
    this.translate.get('UPCOMING_RENEWALS', { output: this.days }).subscribe((s: string) => {
      this.fromVariable = s;
    });

  }
}
