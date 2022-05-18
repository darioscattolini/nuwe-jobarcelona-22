import { Story, Meta, moduleMetadata } from '@storybook/angular';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { JobxUiModule, GiftsGroupListComponent } from 'jobx-ui';
import { groups } from '../sample-data';

const viewport = {
  viewports: {
    ...INITIAL_VIEWPORTS,
    laptop: {
      name: 'laptop',
      styles: {
        width: '1440px',
        height: '900px',
      },
    },
  } 
};

export default {
  title: 'JOBX-UI/GiftsGroupList',
  component: GiftsGroupListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        JobxUiModule
      ],
    }),
  ],
  args: { groups },
  parameters: { viewport }
} as Meta;

const Template: Story<GiftsGroupListComponent> = (args: GiftsGroupListComponent) => ({
  props: args,
});

export const MobileView = Template.bind({});
MobileView.storyName = 'View for Mobile';
MobileView.parameters = { 
  viewport: {
    ...viewport, 
    defaultViewport: 'iphone12'
  }
}

export const TabletView = Template.bind({});
TabletView.storyName = 'View for Tablet';
TabletView.parameters = { 
  viewport: {
    ...viewport, 
    defaultViewport: 'ipad'
  }
}

export const LargeTabletView = Template.bind({});
LargeTabletView.storyName = 'View for Large / Landscape Tablet';
LargeTabletView.parameters = { 
  viewport: {
    ...viewport, 
    defaultViewport: 'ipad12p'
  }
}

export const LaptopView = Template.bind({});
LaptopView.storyName = 'View for Laptop';
LaptopView.parameters = { 
  viewport: {
    ...viewport, 
    defaultViewport: 'laptop'
  }
}
