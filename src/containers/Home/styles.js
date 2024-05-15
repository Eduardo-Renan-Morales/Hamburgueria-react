import styled from "styled-components";




export const Container = styled.div`
    background-color: rgba(10, 10, 16, 1);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100vh;
    
`;

export const Image = styled.img`


`;

export const ContainerItens = styled.div`
    border: 1px solid	#BA55D3;
    border-radius: 61px 61px 0px 0px ;
    padding: 41px 36px;

    display: flex;
    flex-direction: column;
    height: 100vh;



`;

export const H1 = styled.h1`
    color: white;
    height: 33px;
    margin-top: -20px;
    left: 101px;
    font-size: 28px;
    margin-bottom: 60px;
    text-align: center;

    font-weight: 700;
    font-style: normal;
    


`;

export const InputLabel = styled.p`
    color: white;
    font-style: normal;
    font-size: 15px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.40799999237060547px;
    text-align: left;
    margin-left: 25px;
    

`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    top: 521px;
    padding-left: 25px;
    gap: 18px;
    margin-bottom: 34px;
    font-weight: 300;
    font-style: normal;
    


    border-radius: 14px;
    border: none;
    outline: none;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);

    color: rgba(255, 255, 255, 1);

    line-height: 21px;
    font-size: 24;
    
    
    `;

export const Button = styled.button`
    
    background: rgba(217, 56, 86, 1);
    border-radius: 14px;
    width: 342px;
    height: 68px;
    padding: 0px 113px 0px 113px;

    color: rgba(255, 255, 255, 1);

    font-size: 17px;
    line-height: 2.5px;
    text-align: center;
    margin-top: 64px;
    border: none;
    cursor: pointer;

    
    .roboto-black {
    font-family: "Roboto", sans-serif;
    font-weight: 900;
    font-style: normal;
    }


    &:hover{ 
    opacity: 0.8;

    }

    &:active{
    opacity: 0.5;
    }

`;



