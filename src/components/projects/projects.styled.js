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
  height: min-content;
  flex-wrap: wrap;
`;

// export const JobContainerB = styled.div`
//   background-color: ${(props) => props.theme.main};
//   color: ${(props) => props.theme.secondary};
//   display: flex;
//   justify-content: center;
//   flex-direction: row;
//   position: relative;
//   width: 100vw;
//   height: 75vh;
//   flex-wrap: wrap;
// `;

// export const Card = styled.div`
//   width: 95%;
//   height: max-content;
//   margin: 20px;
//   border-radius: 30px;
//   -webkit-box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
//   box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
//   background-color: gray;
// `;

export const MainDiv = styled.div`
  display: flex;
  margin: 38px;
  margin-bottom: 90px;
  // margin-bottom: 80px;
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
  //width: 100%;
  font-size: 3vw;
  font-weight: 700;
  height: max-content;
   margin: 40px;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 4vw;
  }

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
    // @media (max-width: 800px) {
    //   height: 1.5vw;
    // }
    
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
  width: max-content;
  font-size: 3vw;
  color: ${(props) => props.theme.four};
  font-weight: 700;
  height: max-content;
  margin: 20px;
  margin-bottom: 20px;
  z-index: 1;
  @media (max-width: 800px) {
    font-size: 4vw;
  }

  &:after {
    content: "";
    background-color: #da4167;
    height: 1vw;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
    // @media (max-width: 800px) {
    //   height: 1.5vw;
    // }
  }

     &:hover {
    transition: 0.2s ease-in-out;
    transform: scale(1.03);
    
    &:after {
    transition: 0.2s ease-in-out;
    transform: scale(1.03);
    content: "";
    background-color: #da4167;
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

export const Image = styled.img`
  width: 40vw;
  @media (max-width: 800px) {
    width: 60vw;
  }
`;

export const TitleDiv = styled.div`
  width: 50vw;
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
    transition: 0.1s ease-in-out;
    margin-left: 7vw;
    &:after {
    transition: 0.3s ease-in-out;
    content: "";
    background-color: ${(props) => props.theme.two};
    display: block;
    position: absolute;
    width: 100%;
    height: 95%;
    left: -3%;
    bottom: -3%;
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
  margin: auto;
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
