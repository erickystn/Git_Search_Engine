import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

const useGithub = () =>{
    const {gitHubState, getUser, getUserRepos, getUserStarred} = useContext(GithubContext)

    return {gitHubState, getUser, getUserRepos, getUserStarred}
}

export default useGithub