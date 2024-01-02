import { Component, OnInit } from '@angular/core';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.scss']
})
export class AccordianExampleComponent implements OnInit {
  accordianData: any;
  constructor(private mocksApiService: mocksService,) { }

  htmlCode = `
  <ptg-ui-accordian [listData]="data"></ptg-ui-accordian>`;

  tsCode =
    `
    import { Component } from '@angular/core';

    @Component({
      selector: 'demo-accordian-component',
      templateUrl: './demo-accordian.component.html'
    })
    export class DemoAccordianComponent {
      data = [
        {title: 'Static Header', description: 'Accordian Content Area'},
        {title: 'Header 2', description: 'Content Description'}
      ]
    }`

  ngOnInit(): void {
    this.mocksApiService.getAccordianData().subscribe((response) => {
      this.accordianData = response?.data[0].attributes.data;
      });
  }
}
