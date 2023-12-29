import { newSpecPage } from '@stencil/core/testing';
import { PtgTooltip } from './ptg-tooltip';

describe('ptg-modal', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [PtgTooltip],
      html: '<ptg-modal></ptg-modal>',
    });
    expect(root).toEqualHtml(`
      <ptg-modal>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ptg-modal>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [PtgTooltip],
      html: `<ptg-modal first="Stencil" last="'Don't call me a framework' JS"></ptg-modal>`,
    });
    expect(root).toEqualHtml(`
      <ptg-modal first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ptg-modal>
    `);
  });
});
