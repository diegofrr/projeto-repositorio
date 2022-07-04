import styled, { css } from "styled-components";
import { animate } from '../Main/styles';
import { Link } from "react-router-dom";

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column-reverse;
    height: 100vh;
    color: #FFF;
    
    svg {
        margin: 10px;
        font-size: 1em;
        color: #FFF;
        animation: ${animate} 1s ease-in-out infinite;
    }

`

export const Container = styled.div`
    width: calc(100% - 20px);
    background-color: #fff;
    max-width: 600px;
    margin: 80px auto;
    padding: 30px;
    border-radius: 10px;

`

export const BackButton = styled(Link)`
    color: #000;
    border: 0;
    background-color: transparent;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    transition: all .3s ease;

    :hover {
        background-color: rgba(0,0,0,.1);
    }
`

export const Owner = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
        width: 120px;
        border-radius: 50%;
    }

    h1 {
        font-size: 34px;
        font-family: 'PoppinsSemiBold', sans-serif;
    }

    p {
        color: #999;
        max-width: 400px;
        text-align: center;
    }
    
`

export const StateTypes = styled.div`
        display: flex;
        align-items: center;
        justify-content: end;
        
        button {
            border: none;
            background-color: transparent;
            margin-left: 4px;
            font-size: 10px;
            transition: all .3s ease;
            font-weight: bold;
            opacity: .4;
            padding: 2px 8px;

            :hover {
                opacity: 1;
            }

            :disabled {
                background-color: #000;
                opacity: 1;
                border-radius: 10px;
                color: #FFF;
            }
        }
    
`

export const IssuesList = styled.ul`
    margin-top: 30px;
    padding: 10px;
    border-radius: 10px;
    ${props => props.issuesSize > 0 && (
        css`
        border: 1px solid #eee;
        `
    )}

    li {
        display: flex;
        padding: 10px;

        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }

        div {
            flex: 1;
        

            p {
                color: #999;
                font-family: 'PoppinsLight', sans-serif;
                font-size: 12px;
            }

            strong {
                font-size: 14px;
                white-space: pre-wrap;

                a {
                    text-decoration: none;
                    color: #000;
                    transition: all .3s ease;

                    :hover {
                        color: #059efa
                    }
                }

                span {
                    font-size: 12px;
                    display: inline-block;
                    background-color: #000;
                    border-radius: 4px;
                    margin-right: 4px;
                    text-align: center;
                    color: #fff;
                    padding: 0 6px;
                    font-family: 'PoppinsLight', sans-serif;
                }
            }
    }

    }
`

export const PageActions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    
    button {
        background-color: transparent;
        color: #fff;
        border: 2px solid #000;
        height: 30px;
        font-size: 12px;
        padding: 0 10px;
        border-radius: 20px;
        transition: all .3s ease;
        background-color: #000;
        display: flex;
        align-items: center;
        gap: 4px;
        
        :disabled {
            user-select: none;
            opacity: 0;
            cursor: auto;
        }
    }
`