//import { RangeValue } from '@ionic/core/dist/types/components/range/range-interface';
export type RangeValue = number | {
    lower: number;
    upper: number;
};

export interface IOSUIRangeSlider {
    activeBarStart?: number;
    color?: string;
    debounce?: number;
    disabled: boolean;
    interval: boolean;
    label?: string;
    labelPlacement: 'start' | 'end' | 'fixed';
    max: number;
    min: number;
    name: string;
    pin: boolean;
    snaps: boolean;
    step: number;
    ticks: boolean;
    value: RangeValue;
}