import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 5px 100px;
    height: 45px;
    margin-bottom: 20px;

    input{
        border: 1px solid #CCC;
        border-radius: 8px 0px 0px 8px;
        border-right: none;
        width:100%;
        padding: 8px;
        &:focus{
            outline: 0 ;
        }
    }

    button{
        border: 1px solid #CCC;
        border-left: none;
        background-color:#ccc;
        color: #444;
        font-weight: bold;
        border-radius: 0px 8px 8px 0px;
        padding: 7px 16px;

        &:hover{
            box-shadow: 3px 2px 10px rgba(0 ,0 ,0 ,0.2);
            background-color:#DDD;
        }

        
    }



    
`
export const WrapperLogo = styled.div`
display: flex;
align-items: center;
    justify-content: center;
    margin-bottom: 20px ;
    img{
        width:10%;
    }
    

`