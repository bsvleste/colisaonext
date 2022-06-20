import { Story, Meta } from '@storybook/react/types-6-0';
import { Email } from '@styled-icons/material-outlined';

import { Input as TextField, TextFieldProps } from '.';

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com',
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: 'colisao',
      values: [
        {
          name: 'Loggin',
          value: '#ffe600',
        },
        {
          name: 'home',
          value: '#000',
        },
      ],
    },
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: '' },
  },
} as unknown as Meta<TextFieldProps>;
export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
);

withError.args = {
  error: 'Ops...something is wrong',
};
