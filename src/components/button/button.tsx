import { Component, h } from '@stencil/core';

@Component({
    tag: 'osui-button',
    styleUrl: 'button.scss',
    shadow: true,
})

export class OSUIButton {
    render() {
        return [
            <ion-button expand="full" shape="round"> <slot>Custom Ionic Button!</slot> </ion-button >
        ]
    }
}