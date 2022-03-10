import styled from 'styled-components'


export const ContainerMessanger = styled.div`
    .pointer{
        &:hover{
            cursor: pointer;
        }
    }
`

export const Input = styled.input`
    border: none;
    background-color: transparent;
    border-bottom: solid 1px #c9ceda;
    &:focus{
        outline: none;
    }
`

export const H5 = styled.h5`
    color: #65676B;
    font-weight: normal;
    
`

export const ImgProfil = styled.img`
    border-radius: 100%;
    
`

export const ActifMessage = styled.div`
    position: fixed;
    box-shadow: 0 12px 28px 0 rgba(185, 185, 185, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    background-color: #fff;
    border-radius: 10px;
    svg{
        color: #1B74E4;
    }
`

export const TitleActifMessage = styled.h6`
    /* background-color: #fff; */
    
`

export const TextMessage = styled.textarea`
    border-radius: 25px;
    border: none;
    background-color: #e8eaf0;
    height: 3rem;
    &:focus{
        outline: none;
    }
`

export const ContainerSendMessage = styled.div`
    box-shadow: 0 12px 28px 0 rgba(185, 185, 185, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    border-radius: 10px;
`

export const ButtonSend = styled.button`
    color: #1B74E4;
    border: none;
    background-color: transparent;
    &:hover{
        background-color: #E4E6Eb;
        border-radius: 100%;
    }

    svg{
        font-size: 23px;
    }
`

