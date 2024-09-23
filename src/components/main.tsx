import styled from "styled-components";

const MainWrapper = styled.main`
    background-color: blueviolet;
    border-radius: 10px;
`;

const Main = () =>{
    return(
        <MainWrapper>
            <h2>Essa é main</h2>
        </MainWrapper>
    )
}


export default Main;