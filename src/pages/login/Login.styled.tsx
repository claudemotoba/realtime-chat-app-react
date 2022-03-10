import styled from 'styled-components';

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    span{
        font-size: 12px;
    }
`

export const FormLogin = styled.form`
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 0 12px 28px 0 rgba(185, 185, 185, 0.2), 0 2px 4px 0 rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
`

export const FootLogin = styled.p`
    font-size: 12px !important;
`

export const TitleLogin = styled.h1`
    font-size: 25px;
`
export const Description = styled.p`
    color: #65676B;
    font-size: 12px !important;
`

export const Label = styled.label`
    font-size: 13px;
    color: #65676B;
`

export const Logo = styled.h5`
    color: #1B74E4;
`

export const IConFloat = styled.div`
    position: absolute;
    top: 20%;
    left: 2%;
    svg{
        color: #65676B;
    }
`

export const InputLogin = styled.input`
    height: 2.5rem;
    border: solid #d1d1d1 1px;
    border-radius: 5px;
    ::placeholder{
        font-size: 11px;
    }
    &:focus{
        outline: none;
    }
`

export const ButtonLogin = styled.button`
    background-color: #1B74E4;
    color: #e8eaf0;
    border: none;
    border-radius: 5px;
    
`