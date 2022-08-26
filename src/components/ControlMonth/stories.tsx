import { Story, Meta } from '@storybook/react';
import ControlMonth, { ControlMonthProps } from '.';

export default {
  title: 'ControlMonth',
  component: ControlMonth,
} as Meta;
export const Default: Story<ControlMonthProps> = (args) => (
  <ControlMonth {...args} />
);
