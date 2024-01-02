import { Component,  h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'ptg-modal',
  styleUrl: 'ptg-modal.scss',
  shadow: true,
})
export class PtgModal {
  // Props
  @Prop() btnName: string = 'Open Modal';
  @Prop() confirmButtonName: string = 'Confirm';
  @Prop() isOpen : boolean = false;
  @Prop() modalHeaderName: string = 'Modal Header';
  @Prop() modalSize: string = 'md';
  @Prop() showHeader : boolean = true;
  @Prop() showFooter : boolean = true;
  // Event emitter
  @Event() modalClose: EventEmitter<boolean>;
  @Event() confirmClose: EventEmitter<boolean>;

  private closeModule = () =>{
    this.isOpen = false;
    this.modalClose.emit(true);
  }
  private confirmEvent=()=>{
    this.confirmClose.emit(true);
  }
  private openModal=()=>{
    this.isOpen = true;
  }

  render() {
    return (
      <div>
        <div>
          <ptg-button text={this.btnName} data-testid="openButton" appearance="primary" onClick={this.openModal}></ptg-button>
        </div>
        <div class={this.isOpen ? 'modal-wrapper isOpen' : 'modal-wrapper'} data-backdrop="static">
          <div class="modal-overlay">
            <div class={`modal ${this.modalSize == 'lg' ? 'lg' : (this.modalSize == 'sm' ? 'sm' : 'md') }`}>
              {this.showHeader &&
                <div class="header">
                  <h6>{this.modalHeaderName}</h6>
                  <div class="close" data-testid="closeButton" onClick={this.closeModule}>
                    ×
                  </div>
                </div>
              }
              <div class="body">
                <slot name="body-block"/>
              </div>
              {this.showFooter &&
                <div class="footer">
                  <ptg-button text={this.confirmButtonName} appearance="primary" onClick={this.confirmEvent}></ptg-button>
                  <ptg-button text="Cancel" appearance="danger" onClick={this.closeModule}></ptg-button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
