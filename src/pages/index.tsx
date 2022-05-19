import Menu from 'components/Menu'
import Placar from './template/Placar'
export default function Index() {
  return (
    <>
      <Menu isLogged={true} />
      <Placar />
    </>
  )
}
