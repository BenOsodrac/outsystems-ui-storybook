import { Component, h, Prop } from '@stencil/core';
import { IOSUIRangeSlider, RangeValue } from './interface';
//import { CssClass } from './enum';

@Component({
    tag: 'osui-range-slider',
    styleUrl: 'range-slider.scss',
    shadow: true,
})

export class OSUIRangeSlider implements IOSUIRangeSlider {
    @Prop() activeBarStart?: number;
    @Prop() debounce?: number;
    @Prop() disabled: boolean;
    @Prop() interval: boolean;
    @Prop() label?: string;
    @Prop() labelPlacement: 'start' | 'end' | 'fixed';
    @Prop() max: number;
    @Prop() min: number;
    @Prop() name: string;
    @Prop() pin: boolean;
    @Prop() snaps: boolean;
    @Prop() step: number;
    @Prop() ticks: boolean;
    @Prop() value: RangeValue;

    render() {
        return [
            <ion-range activeBarStart={this.activeBarStart} debounce={this.debounce} disabled={this.disabled} dualKnobs={this.interval}
                label={this.label} labelPlacement={this.labelPlacement} min={this.min} max={this.max} name={this.name} pin={this.pin} snaps={this.snaps}
                step={this.step} ticks={this.ticks} value={this.value}></ion-range>
        ]
    }
}