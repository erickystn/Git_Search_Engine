import styled from "styled-components";


export const Wrapper = styled.div`

    display: flex;
    align-items: center;
    padding-left: 5%;
    
`

export const WrapperInfoUser = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-left: 10px;
    height: 200px;

    h1{
        font-size: 32px;
        font-weight: bold;
        
    }
    h3{
        font-size: 18px;
        font-weight: bold;
    }
    h4{
        font-size: 16px;
        font-weight: bold;
    }
    
`

export const WrapperImage = styled.img`

   border-radius: 50%;
   width:150px;
    
`

export const WrapperStatusCount = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        margin: 10px;
        text-align: center;
    }
    
`
export const WrapperInfoData = styled.div`

    display: flex;
    align-items: center;
    margin-top: 8px;
    a{
  
        color: blueviolet;
        font-weight: bold;
        font-size: 18px;
    }
    h3{
        margin-right: 8px;
    }
`

