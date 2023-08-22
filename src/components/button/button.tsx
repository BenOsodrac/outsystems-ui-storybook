import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'osui-button',
    styleUrl: 'button.scss',
    shadow: true,
})

export class OSUIButton {
    @Prop() dataButton: string;

    render() {
        return [
            <ion-button data-button={this.dataButton}> <slot>Custom Ionic Button!</slot> </ion-button >
        ]
    }
}
