import React from 'react';
import useGithub from '../../hooks/github-hooks';
import * as S from './styled'

const Profile = () => {

  const { gitHubState } = useGithub();
  return (
    <S.Wrapper>

      <S.WrapperImage src={gitHubState.user.avatar_url} alt="User's Avatar" />
      <S.WrapperInfoUser>

        <div>
          <h1>{gitHubState.user.name}</h1>
          <S.WrapperInfoData>
            <h3> Username:</h3>
            <a href={gitHubState.user.html_url} target='_blank' rel="noreferrer">{gitHubState.user.login}</a>
          </S.WrapperInfoData>

          <S.WrapperInfoData>
            <h3>Company:</h3> <span>{!gitHubState.user.company ?  "---"  : gitHubState.user.company}</span>
          </S.WrapperInfoData>

          <S.WrapperInfoData>
            <h3>Location:</h3> <span>{gitHubState.user.location}</span>
          </S.WrapperInfoData>

          <S.WrapperInfoData>
            <h3>Blog:</h3>{ !gitHubState.user.blog ?  "---"  : (<a href={gitHubState.user.blog} target='_blank' rel="noreferrer">{gitHubState.user.blog}</a>)}
          </S.WrapperInfoData>
        </div>

        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4> <span>{gitHubState.user.followers}</span>
          </div>
          <div>
            <h4>Gists</h4> <span>{gitHubState.user.public_gists}</span>
          </div>
          <div>
            <h4>Repos</h4> <span>{gitHubState.user.public_repos}</span>
          </div>
          <div>
            <h4> Following </h4> <span>{gitHubState.user.following} </span>
          </div>
        </S.WrapperStatusCount>

      </S.WrapperInfoUser>



    </S.Wrapper>
  );
}

export default Profile;
