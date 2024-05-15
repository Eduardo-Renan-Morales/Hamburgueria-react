import styled from "styled-components";




export const Container = styled.div`
    background-color: rgba(10, 10, 16, 1);
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    /* height: 100vh; */
    
`;

export const Image = styled.img`
    width: 246px;
    height: 354px;
    left: 84px;



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
    margin-bottom: 35px;
    text-align: center;

    font-weight: 700;
    font-style: normal;
    


`;


export const Button = styled.button`
    
    background: rgba(255, 255, 255, 0.14);

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

export const Order = styled.li`

    
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    background: rgba(255, 255, 255, 0.25);

   
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 342px;
    height: 101px;
    margin-top: 20px;
   

    
    border-radius: 14px;
    border: none;
    outline: none;

    line-height: 21px;
   
    p{

    color: white;
    font-weight: 300;
    font-style: normal;
    font-size: 15px;

    }
    
    button {
    background: none;
    border: none;
    cursor: pointer;
        
    }
`;

export const DivOrder = styled.div`
   

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 28px;

    .name{
    font-size: 18px;
    font-weight: 700;
    line-height: 21.09px;
    text-align: left;
    color: white;
    


    }



`;
