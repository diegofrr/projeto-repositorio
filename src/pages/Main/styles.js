import styled, { keyframes, css } from "styled-components";

const blueColor = '#6495ed';
const blueColorLight = '#8baff1';

export const Container = styled.div`
    width: calc(100% - 20px);
    background-color: #fff;
    max-width: 600px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 10px;

    h1 {
        font-size: 20px;
        display: flex;
        align-items: center;
        flex-direction: row;

        svg {
            margin-right: 10px;
        }
    }
`

export const Form = styled.form`
    margin-top: 20px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        height: 40px;
        border-radius: 6px;
        padding: 10px;
        border: 1px solid ${props => props.error ? '#FF0000' : '#eee'};
        background-color: ${props => props.error ? 'rgba(255,0,0,.1)' : 'transparent'};
        font-size: 1em;
    }
`

// ANIMAÇÃO DO BOTÃO
export const animate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,

}))`
    background-color: ${blueColor};
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 6px;
    border: none;
    margin-left: 10px;
    transition: all .3s ease;

    :hover {
        background-color: ${blueColorLight};
    }

    :active, :focus {
        background-color: ${blueColor};
    }

    &[disabled] {
        cursor: not-allowed;
    }

    ${props => props.loading &&
        css`
            svg {
                animation: ${animate} 1s ease-in-out infinite;
            }
        `
    }

`

export const List = styled.ul`
    margin-top: 20px;

    .emptyMsg {
        color: #999;
        font-style: italic;
        font-size: 12px
    }

    span {
        width: 100%;
        margin-left: 10px;
    }

    li {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: 1px solid #eee;
        }

        a { 
            display: grid;
            place-items: center;
            color: #000;
            opacity: .4;
            transition: all .3s ease;

            :hover {
                opacity: 1
            }
        }
}
`

export const DeleteButton = styled.button.attrs({
    type: 'button',
})`

    border: none;
    display: grid;
    place-items: center;
    background-color: transparent;
    color: #ff0000;
    opacity: .3;
    transition: all .3s ease;

    :hover {
        opacity: 1;
        color: #ff0000;
    }

`;

export const DeleteAll = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-top: 20px;

    button {
        background-color: transparent;
        color: #ff0000;
        border: none;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border-radius: 20px;
        transition: all .3s ease;

        :hover {
            background-color: rgba(255,0,0,.1);
        }

        :active {
            background-color: transparent;
            opacity: .7
        }

    }
`;

