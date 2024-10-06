import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import * as S from './styles'

const Header = () => {
  return (
    <S.Head>
        <S.List>
          <S.ListItem><h3>Restaurantes</h3></S.ListItem>
          <S.ListItem>
            <Link to="/">
              <img src={logo} alt="eFood" />
            </Link>
          </S.ListItem>
          <S.ListItem><span>0 produto(s) no carrinho</span></S.ListItem>
          </S.List>
    </S.Head>
  )
}

export default Header
