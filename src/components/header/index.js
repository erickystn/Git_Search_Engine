import React, {useState} from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled';
import Logo from '../../assets/img/logo.png'

const Header = () => {

    const {getUser} = useGithub();
    const [usernameForSearch, setUserNameForSearch] = useState('');

    const submitGetUser =() =>{ 
        if(!usernameForSearch) return; 
        return getUser(usernameForSearch)
    }


    return (
        <>
        <S.WrapperLogo>
        <img src={Logo} alt="Github's logo With a magnifying glasss"/>
        </S.WrapperLogo>
        <S.Wrapper>
            <input type="text" value={usernameForSearch} placeholder='Digite o username para pesquisa...'
             onChange={event => setUserNameForSearch(event.target.value)} />

            <button type="submit" onClick={submitGetUser}>Buscar</button>

        </S.Wrapper>
        </>
    );
}

export default Header;
