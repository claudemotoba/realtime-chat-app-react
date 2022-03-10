import styled from 'styled-components';


export const HeaderStyled = styled.header`
    height: 60px;
    background-color: #fff;
    position: fixed;
    display: flex;
    z-index: 2;
    box-shadow: 0 12px 28px 0 rgba(185, 185, 185, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    svg{
        font-size: 28px;
    }

    .activeClassName{
        color:#1B74E4; 
        border-bottom: #1B74E4 solid 3px;
    }
`

export const Ul = styled.ul`
    padding-left: 0;
    display: flex;
    justify-content: center;
`

export const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 0;
    color: #1B74E4;
`

export const Li = styled.li`
    list-style-type: none;
    text-align: center;

    svg{
        color: #65676B
    }
    a{
        text-decoration: none;
        color: #000;
        &:hover{
            cursor: pointer;
            color: #1B74E4;
        }
    }
    &:hover{
        cursor: pointer;
        border-bottom: #1B74E4 solid 3px;
        svg{
            color:#1B74E4; 
        }
    }
`

export const Input = styled.input`
    border-radius: 25px;
    background-color: #F0F2F5;
    border: none;
    &:focus{
        outline: none;
    }
`

export const Img = styled.img`
    border-radius: 100%;
    
`

export const Notification = styled.div`
    background-color: #E4E6Eb;
    height: 36px;
    width: 36px;
    text-align: center;
    border-radius: 100%;
    svg{
        font-size: 16px;
    }
`
