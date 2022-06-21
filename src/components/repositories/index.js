import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks.js';
import RepositoryItem from '../repository-item/index.js';
import * as S from './styled.js'


const Repositories = () => {

    const { gitHubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

    useEffect(() => {

        if (!!gitHubState.user.login) {
            getUserRepos(gitHubState.user.login)
            getUserStarred(gitHubState.user.login)
        }

        sethasUserForSearchRepos(!!gitHubState.repositories) // converte em booleano o valor

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gitHubState.user]);

    return (

        <>
            {hasUserForSearchRepos ? (<S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
                <S.WrapperTabList>
                    <S.WrapperTab>Repositories</S.WrapperTab>
                    <S.WrapperTab>Starred</S.WrapperTab>
                </S.WrapperTabList>

                <S.WrapperTabPanel>
                    <S.WrapperList>
                        {gitHubState.repositories.map(item => (
                            <RepositoryItem key={item.id} name={item.name} html_url={item.html_url} full_name={item.full_name} />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>

                <S.WrapperTabPanel>
                    <S.WrapperList>
                        {gitHubState.starred.map(item => (
                            <RepositoryItem key={item.id} name={item.name} html_url={item.html_url} full_name={item.full_name} />
                        ))}
                    </S.WrapperList>
                </S.WrapperTabPanel>

            </S.WrapperTabs>) : <></>}
        </>
    );
}

export default Repositories;
