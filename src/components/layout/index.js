import React from 'react';
import Header from '../header/index.js';
import * as S from './styled.js'

const Layout = ({children}) => {

   
    return (
        <S.WrapperLayout>
            <Header/>
            
            {children}
        </S.WrapperLayout>
    );
}

export default Layout;
