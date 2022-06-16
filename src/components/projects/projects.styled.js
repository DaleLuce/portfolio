import styled from "styled-components";

export const Main = styled.div`
  scroll-margin-top: 9vw;
`;

export const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 100vw;
  height: max-content;
  flex-wrap: wrap;
`;

export const MainDiv = styled.div`
  display: flex;
  margin: 38px;
  margin-bottom: 90px;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  position: relative;
  width: max-content;
  font-size: 3vw;
  font-weight: 700;
  height: max-content;
  margin: 20px;
  z-index: 1;
  color: #f4d35e;

  &:visited {
    color: #f4d35e;
  }
`;

export const LinkB = styled.a`
  position: relative;
  width: max-content;
  font-size: 3vw;
  font-weight: 700;
  height: max-content;
  margin: 20px;
  margin-bottom: 20px;
  z-index: 1;
  color: #f4d35e;

  &:visited {
    color: #f4d35e;
  }
`;
export const Title = styled.div`
  position: relative;
  font-size: 3vw;
  text-align: center;
  font-weight: 700;
  margin: 40px;
  margin-bottom: 20px;
  z-index: 1;
  
  @media (max-width: 800px) {
    font-size: 4.5vw;
  }

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: .75vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20%;
    z-index: -1;
    @media (max-width: 800px) {
      height: 1.6vw;
      bottom: 14%
    }
    
  }

    &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.03);
    
    &:after {
    transition: 0.2s ease-in-out;
    transform: scale(1.03);
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 1.15vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 10%;
    z-index: -1;

  }
    &:active{
    transition: 0.1s ease-in-out;
    transform: scale(1.25);
`;

export const TitleB = styled.div`
  position: relative;
  font-size: 4vw;
  text-align: center;
  font-weight: 700;
  margin: 40px;
  margin-bottom: 20px;
  z-index: 1;
  color: ${(props) => props.theme.four};

  
  @media (max-width: 800px) {
    font-size: 7vw;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 22%;
    z-index: -1;
    @media (max-width: 800px) {
      height: 2vw;
    }
  }

     &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.17);
    
    &:after {
    transition: 0.2s ease-in-out;
    transform: scale(1.05);
    content: "";
    background-color: #da4167;
    display: block;
    position: absolute;
    width: 100%;    
    height: 1.3vw;
    left: 0;
    // bottom: 10%;
    z-index: -1;
     @media (max-width: 800px) {
      height: 1.5vw;
    }

  }
     &:active{
    transition: 0.1s ease-in-out;
    transform: scale(1.25);
  `;
export const TitleC = styled.div`
  position: relative;
  font-size: 5vw;
  text-align: center;
  font-weight: 700;
  height: max-content;
   margin: 40px;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 10vw;
  }

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 1.6vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 20%;
    z-index: -1;
    @media (max-width: 800px) {
      height: 3vw;
    }
    
  }

    &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.1);
    
    
    &:after {
    transition: 0.2s ease-in-out;
    transform: scale(1.08);
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 1.8vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 16%;
    z-index: -1;
      @media (max-width: 800px) {
      transform: scale(1.2);
      height: 4vw;
      bottom: 16%;
    }

  }
    &:active{
    transition: 0.1s ease-in-out;
    transform: scale(1.25);
`;

export const Image = styled.img`
  width: 40vw;
  @media (max-width: 800px) {
    width: 60vw;
  }
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 20px;
  margin: auto;
  position: relative;
  z-index: 1;
`;

export const ImageDiv = styled.div`
  margin-left: 3vw;
  width: max-content;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    width: max-content;
    right: 0;
  }

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -5%;
    bottom: -5%;
    z-index: -1;
  }
 &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.02);

    &:after {
    transition: 0.3s ease-in-out;
    transform: scale(1.03);
    content: "";
    background-color: ${(props) => props.theme.two};
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -6%;
    bottom: -9%;
    z-index: -1;

  }
  &:active{
    transition: 0.3s ease-in-out;
    transform: scale(.96);
    &:after {
    transition: 0.3s ease-in-out;
    content: "";
    background-color: ${(props) => props.theme.two};
    display: block;
    position: absolute;
    width: 94%;
    height: 94%;
    left: -1%;
    bottom: 4%;
    z-index: -1;


  }
`;

export const WordDiv = styled.div`
  display: flex;
  margin: auto;
  width: 35vw;
  text-align: center;
  @media (max-width: 800px) {
    width: 75vw;
  }
`;

export const Blurb = styled.div`
  text-align: justify;
  height: min-content;
  margin: 25px auto;

  left: 0;
  right: 0;
  font-size: 1.38em;
  font-weight: 400;
  @media (max-width: 800px) {
    // margin-top: 25vh;
    // position: absolute;
    // width: 68vw;
    // font-size: 6vw;
    // font-weight: 500;
  }
`;
