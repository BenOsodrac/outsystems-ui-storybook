export default {
    title: 'Components/Card',
    argTypes: {
        showHeader: { control: { type: 'boolean' } },
        backgroundcolor: {
            control: {
                type: 'color',
            },
        },
        alignment: { control: 'select', options: ['vertical', 'horizontal'] },
        reverseColumn: { control: { type: 'boolean' } },
        border: { control: 'select', options: ['none', 'soft', 'rounded'] },
    },
    parameters: {
        actions: {
            argTypesRegex: '^on.*',
            handles: ['click']
        }
    },
};

const Template = (args) => `<div style="width: 400px">
                                <osui-card alignment="${args.alignment}" reverse-column="${args.reverseColumn}" border="${args.border}" background-color="${args.backgroundcolor}" show-header="${args.showHeader}">
                                    <p slot="header">Hire our personal small price</p>
                                    <img style="height: 250px" width="100%" slot="content" src="https://outsystemsui.outsystems.com/OutSystemsUIWebsite/img/StyleGuidePreviewAssets.PatternPreviewPhoto10.png" alt="">
                                    <a slot="footer" href="#">Simulate Loan</a>
                                </osui-card>
                            </div>`


export const Example = Template.bind({});
Example.args = {
    alignment: 'vertical',
    reverseColumn: false,
    border: 'none',
    backgroundcolor: 'var(--color-neutral-0)',
    showHeader: true
};
