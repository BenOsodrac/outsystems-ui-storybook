import { Component, Element, h, State, Event, EventEmitter} from '@stencil/core';
import { IOSUIModel } from './interface';

@Component({
  tag: 'osui-model',
  styleUrl: 'osui-model.scss',
  shadow: true,
})
export class OsuiModel implements IOSUIModel {
  @Element() selfElement: HTMLElement;

  @State() uniqueId: string;
  
  constructor(){
    this.uniqueId = Math.random().toString(36);
  }

  private _modelToggleEvent(newState: boolean){
    (this.selfElement as any).isOpen​ = newState;
    this.modelToggle.emit(newState);
  }

  @Event({
      eventName: 'modelToggle',
      composed: true,
      cancelable: true,
      bubbles: false,
  }) modelToggle: EventEmitter<boolean>;

  render() {
    return (
      <ion-modal id={this.uniqueId} didDismiss={this._modelToggleEvent(false)} didPresent={this._modelToggleEvent(true)}>
        <ng-template>
          <ion-header>
            <ion-toolbar>
              <slot name='header'>Insert Your header and buttons here</slot>
            </ion-toolbar>
          </ion-header>
        </ng-template>
        <slot name='content'>Insert Your content here</slot>
      </ion-modal>
    );
  }

}
