import styled from "styled-components";

const DropDownContainer = styled.div `
    position: absolute;
    top: 4.5rem;
    right: 6rem;
    width: 15rem;
    padding: 15px;
    border-radius: 15px;
    background: #181818;
    box-shadow: 0px 4px 4px 0px #00000040;
    border: none;
    color: #FFFFFF;
    z-index: 999;
`

const UserName = styled.li `
    list-style: none;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
`

const UserRa = styled.li `
    list-style: none;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 12px;
    line-height: 25px;
`

const LogoutBtn = styled.button `
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin-top: 0.5rem;
    color: #FFFFFF;

    background-color: transparent;
    border: none;

    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 0.5rem;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`

export {DropDownContainer, UserName, UserRa, LogoutBtn}