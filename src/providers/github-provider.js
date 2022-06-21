import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext()

const GithubProvider = ({ children }) => {

    const [gitHubState, setGitHubState] = useState({
        loading: false,
        hasUser: false,
        user: {
            login: undefined,
            avatar_url: undefined,
            name: undefined,
            html_url: undefined,
            blog: undefined,
            company: undefined,
            location: undefined,
            followers: 0,
            following: 0,
            public_gists: 0,
            public_repos: 0
        },
        repositories: [],
        starred: []
    });

    const getUser = username => {


        api.get(`users/${username}`).then(({ data }) => {


            setGitHubState(previousState => ({ //mostra loading enquanto a promise nao esta resolvida
                ...previousState,
                loading: !previousState.loading
            }));


            setGitHubState(previousState => ({
                ...previousState,
                loading: true,
                hasUser: true,
                user: {
                    login: data.login,
                    avatar_url: data.avatar_url,
                    name: data.name,
                    html_url: data.html_url,
                    blog: data.blog,
                    company: data.company,
                    location: data.location,
                    followers: data.followers,
                    following: data.following,
                    public_gists: data.public_gists,
                    public_repos: data.public_repos,
                }
            }))
        }).catch(() => {
            setGitHubState(previousState => ({ //mostra loading enquanto a promise nao esta resolvida
                ...previousState,
                hasUser: false,
            }));
        })
            .finally(() => {
                setGitHubState(previousState => ({ //mostra loading enquanto a promise nao esta resolvida
                    ...previousState,
                    loading: !previousState.loading
                }));
            })

    }

    const getUserRepos = (username) => {
             api.get(`users/${username}/repos`).then(({ data }) => {

                setGitHubState(previousState => ({
                    ...previousState,
                    repositories: data,
                }))
        })
    }

    const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {

           setGitHubState(previousState => ({
               ...previousState,
               starred: data,
           }))
   })
}

    const contextValue = {
        gitHubState,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), [])
    }

    return <GithubContext.Provider value={contextValue}>  {children} </GithubContext.Provider>;
}

export default GithubProvider;
