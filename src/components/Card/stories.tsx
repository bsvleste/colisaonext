import { Story, Meta } from '@storybook/react'
import Card, { CardProps } from '.'
export default {
  title: 'Card',
  component: Card
} as Meta
export const Default: Story<CardProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <Card {...args} />
  </div>
)
