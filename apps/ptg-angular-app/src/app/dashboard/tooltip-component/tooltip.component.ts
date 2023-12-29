import { Component } from '@angular/core';

@Component({
  selector: 'ptg-ui-dialog-component',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  htmlCode = `
  <ptg-tooltip
      text="A Tooltip To The Top"
      tooltip-text="Top Tooltip"
      tooltip-alignment="top"
      background-color="#000"
    >
    </ptg-tooltip>

    <ptg-tooltip
      text="A Tooltip To The Bottom"
      tooltip-text="Bottom Tooltip"
      tooltip-alignment="bottom"
      background-color="#000"
    >
    </ptg-tooltip>

    <ptg-tooltip
      text="A Tooltip To The Left"
      tooltip-text="Left Tooltip"
      tooltip-alignment="left"
      background-color="#000"
    >
    </ptg-tooltip>

    <ptg-tooltip
      text="A Tooltip To The Right"
      tooltip-text="Right Tooltip"
      tooltip-alignment="right"
      background-color="#000"
    >
    </ptg-tooltip>
  `;

  tsCode =
    `
  import { Component } from '@angular/core';

    @Component({
      selector: 'tooltip-component',
      templateUrl: './tooltip.component.html'
    })
    export class TooltipComponent {}`

  
}
