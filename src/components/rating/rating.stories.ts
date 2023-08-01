export default {
    title: 'Components/Rating',
    argTypes: {
        editable: { control: { type: 'boolean' } },
        scale: { control: { type: 'number' } },
        value: { control: { type: 'number' } },
    }
};

const Template = (args) => `<div style="width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center">
                                <osui-rating editable="${args.editable}" scale="${args.scale}" value="${args.value}"></osui-rating>
                            </div>`


export const Example = Template.bind({});
Example.args = {
    editable: true,
    scale: 5,
    value: 3
};
