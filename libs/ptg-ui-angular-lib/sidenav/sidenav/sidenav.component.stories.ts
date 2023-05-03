import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SidenavComponent } from './sidenav.component';

export default {
  title: 'Component/SidenavComponent',
  component: SidenavComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<SidenavComponent>;

const Template: Story<SidenavComponent> = (args: SidenavComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  selectedPath: '',
  isMenuOpen: false,
};
