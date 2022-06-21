import React from 'react';
import * as S from './styled'

const RepositoryItem = ({name, html_url, full_name}) => {
    return (
        <S.Wrapper>
            <h2>{name}</h2>
            <h4>Full name:</h4>
            <a href={html_url} target='_blank' rel='noreferrer'> {full_name}</a>
            
        </S.Wrapper>
    );
}

export default RepositoryItem;
