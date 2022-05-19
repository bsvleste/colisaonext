import { Story, Meta } from '@storybook/react/types-6-0'
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart'
import Button, { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as unknown as Meta
export const Default: Story<ButtonProps> = (args) => <Button {...args} />
export const withIcon: Story = (args) => <Button {...args} />
export const asLink: Story = (args) => <Button {...args} />
export const whithBorder: Story = (args) => <Button {...args} />

Default.args = {
  color: 'amareloMenu'
}
withIcon.args = {
  size: 'medium',
  children: 'Buy Now',
  icon: <AddShoppingCart />
}
whithBorder.args = {
  children: 'Bid',
  border: true
}
asLink.args = {
  size: 'large',
  children: 'Buy Now',
  as: 'a',
  href: '/link'
}
