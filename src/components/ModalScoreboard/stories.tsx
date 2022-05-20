import { Story, Meta } from '@storybook/react'
import ModalScoreboard, { ModalScoreboardProps } from '.'
export default {
  title: 'Card',
  component: ModalScoreboard
} as Meta
export const Default: Story<ModalScoreboardProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <ModalScoreboard {...args} />
  </div>
)
