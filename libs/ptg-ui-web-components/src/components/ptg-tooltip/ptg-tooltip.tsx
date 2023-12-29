import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ptg-tooltip',
  styleUrl: 'ptg-tooltip.scss',
  shadow: true,
})
export class PtgTooltip {
  @Prop() tooltipText: string = 'Top Tooltip';

  @Prop() tooltipAlignment: string = 'top';

  @Prop() text: string = 'A Tooltip To The Top';

  @Prop() backgroundColor: string = '#000';

  render() {
    const tooltipAlignmentCustomCSS: any = {
      'background-color': `${this.backgroundColor}`,
    };

    return (
      <div class="main">
        <div class="tooltip">
          <p>{this.text}</p>
          <div
            class={`alignment ${this.tooltipAlignment}`}
            style={tooltipAlignmentCustomCSS}
          >
            <h3>{this.tooltipText}</h3>
            <i></i>
          </div>
        </div>
      </div>
    );
  }
}
