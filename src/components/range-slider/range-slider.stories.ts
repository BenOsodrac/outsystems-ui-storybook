export default {
    title: 'Components/RangeSlider',
    argTypes: {
        labelPlacement: { control: 'select', options: ['start', 'end', 'fixed'] },
    },
};

const Template = (args) => `<div style="width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; padding: 100px;">
                                <osui-range-slider active-bar-start=${args.activeBarStart} debounce=${args.debounce} disabled=${args.disabled} dual-knobs=${args.interval}
                                label=${args.label} label-placement=${args.labelPlacement} min=${args.min} max=${args.max} name=${args.name} pin=${args.pin} snaps=${args.snaps}
                                step=${args.step} ticks=${args.ticks} value=${args.value}>
                                </osui-range-slider>
                            </div>`;

export const Basic = Template.bind({});
Basic.args = {
    activeBarStart: 0,
    debounce: 1,
    disabled: false,
    interval: false,
    label: "label",
    labelPlacement: 'start',
    max: 100,
    min: 0,
    name: "name",
    pin: false,
    snaps: true,
    step: 1,
    ticks: false,
    value: 30,
};
