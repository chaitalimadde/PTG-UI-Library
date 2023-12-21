import { Component, OnInit } from '@angular/core';
import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';

@Component({
  selector: 'ptg-ui-accordian-example',
  templateUrl: './accordian-example.component.html',
  styleUrls: ['./accordian-example.component.scss']
})
export class AccordianExampleComponent implements OnInit {
  accordianData:any;
  constructor(private mocksApiService: mocksService,) { }

  ngOnInit(): void {
    this.mocksApiService.getAccordianData().subscribe((response) => {
      this.accordianData = response?.data[0].attributes.data;
      });
  }

}
