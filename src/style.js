import styled from "styled-components"; //Estilização dos componentes

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div `
    background-color: #FAFAFA;
    width: 80%;
    min-height: 350px;
    padding: 1px;
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`