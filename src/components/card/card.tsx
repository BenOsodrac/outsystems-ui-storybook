import { Component, Prop, Watch, h, Element } from '@stencil/core';
import { CssClass, CssCustomProperties } from './enum';
import { ICard } from './cardInterface';
import { alignment, border } from '../global-enum';
import { setStyleAttribute } from '../../utils/utils';

@Component({
    tag: 'osui-card',
    styleUrl: 'card.scss',
    shadow: true,
})

export class OSUICard implements ICard {

    @Element() selfElement: HTMLElement;

    @Prop() alignment: alignment;

    @Prop() reverseColumn: boolean;

    @Prop() border: border;

    @Prop() backgroundColor: string;

    @Prop() showHeader: boolean;

    @Prop() showContent: boolean;

    @Prop() showFooter: boolean;

    @Watch('alignment')
    alignmentChanged(newValue: alignment, oldValue?: alignment) {
        if (oldValue !== undefined) {
            this.selfElement.classList.remove(CssClass.Modifier + oldValue);
        } else {
            this.selfElement.classList.add(CssClass.Modifier + newValue);
        }
    }

    @Watch('reverseColumn')
    reverseColumnChanged(newValue: boolean) {
        if (newValue === false) {
            this.selfElement.classList.remove(CssClass.IsReverseColumn);
        } else {
            this.selfElement.classList.add(CssClass.IsReverseColumn);
        }
    }

    @Watch('border')
    borderChanged(newValue: string) {
        setStyleAttribute(
            this.selfElement,
            CssCustomProperties.Border,
            `var(--border-radius-${newValue})`
        );
    }

    @Watch('backgroundColor')
    backgroundChanged(newValue: string) {
        setStyleAttribute(
            this.selfElement,
            CssCustomProperties.BackgroundColor,
            newValue
        );
    }

    @Watch('showHeader')
    reverseShowHeaderChanged(newValue: boolean) {
        if (newValue === false) {
            this.selfElement.classList.remove(CssClass.ShowHeader);
        } else {
            this.selfElement.classList.add(CssClass.ShowHeader);
        }
    }

    connectedCallback() {
        this.alignmentChanged(this.alignment);
        this.reverseColumnChanged(this.reverseColumn);
        this.borderChanged(this.border);
        this.backgroundChanged(this.backgroundColor);
        this.reverseShowHeaderChanged(this.showHeader);
    }

    render() {
        return [
            <header class='osui-card__header' part='header'><slot name='header'>Insert Your Title</slot></header>,
            <div class='osui-card__content' part='content'><slot name='content'>Insert Your Content</slot></div>,
            <footer class='osui-card__footer' part='footer'><slot name='footer'>Insert Your Footer Content</slot></footer>
        ]
    }
}
