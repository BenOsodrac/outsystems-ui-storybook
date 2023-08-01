import { Component, Prop, h, Fragment, Element, Listen, Method } from '@stencil/core';
import { CssClass } from './enum';

@Component({
    tag: 'osui-rating',
    styleUrl: 'rating.scss',
    shadow: true,
})

export class OSUIRating {

    private _currentValue: number;

    private _ratingItems: NodeListOf<HTMLInputElement>;

    @Element() selfElement: HTMLElement;

    @Prop() editable: boolean = true;

    @Prop() scale: number = 5;

    @Prop() value: number = 0;

    @Listen('click')
    async handleClick() {
        this._currentValue = await this.getValue();
    }

    connectedCallback() {
        this.selfElement.classList.add(CssClass.Rating);
        if (this.editable) {
            this.selfElement.classList.add(CssClass.IsEdit);
        }

    }

    componentDidRender() {
        this._ratingItems = this.selfElement.shadowRoot.querySelectorAll('input');
        this.setValue(this.value);
    }

    renderRatingItem(index: number): HTMLCollection {
        const _hideLabelClass: string = index === 0 ? CssClass.WCAGHideText : '';
        // Create a unique rating input id, based on the index
        const _ratingInputId: string = 'rating-' + index;

        // Create input and label html
        return <Fragment>
            <input type="radio" class={`${CssClass.RatingInput} ${CssClass.WCAGHideText}`} id={_ratingInputId} name="rating-input" value={index} />
            <label class={`${CssClass.RatingItem} ${_hideLabelClass}`} htmlFor={_ratingInputId}>
                <span class={CssClass.WCAGHideText}>Rating {index}</span>
                {index !== 0
                    ? <><ion-icon class={CssClass.Filled} name="star" color="primary"></ion-icon><ion-icon class={CssClass.Empty} name="star-outline"></ion-icon></>
                    : undefined
                }
            </label>
        </Fragment >
    }

    @Method()
    async getValue(): Promise<number> {
        const _inputChecked = this.selfElement.shadowRoot.querySelector('input:checked') as HTMLInputElement;

        if (_inputChecked) {
            this._currentValue = parseInt(_inputChecked.value);
        }

        return this._currentValue;
    }

    @Method()
    async setValue(value: number): Promise<void> {

        if (value < 0 || value > this.scale || value === this._currentValue) {
            return;
        }

        this._ratingItems[value].checked = true;
        this._currentValue = value;
    }

    render() {
        return [
            <fieldset>
                <legend class={CssClass.WCAGHideText}>Rating</legend>
                {Array.from(Array(this.scale + 1).keys()).map((index) => (
                    this.renderRatingItem(index)
                ))}
            </fieldset>
        ]
    }
}