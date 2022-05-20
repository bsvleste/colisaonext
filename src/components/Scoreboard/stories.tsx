import { Story, Meta } from '@storybook/react'
import Scoreboard, { ScoreboardProps } from '.'

export default {
  title: 'Scoreboard',
  component: Scoreboard
} as Meta
export const Default: Story<ScoreboardProps> = (args) => (
  <div style={{ margin: '0 auto' }}>
    <Scoreboard {...args} />
  </div>
)

Default.args = {
  data: '15/05/2021',
  color: 'amareloMenu',
  background: 'preto',
  infoQuadro: 'Segundo Quadro'
}
