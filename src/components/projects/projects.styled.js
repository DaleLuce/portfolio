import styled from "styled-components";

export const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 100vw;
  height: 80vh;
  flex-wrap: wrap;
  // @media (max-width: 800px) {
  //   height: max-content;
  // }
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

export const Card = styled.div`
  width: 95%;
  height: max-content;
  margin: 20px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
  box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
  background-color: gray;
`;

export const MainDiv = styled.div`
  display: inline-flex;
  margin: auto;
  margin-bottom: 900px;
`;

export const Title = styled.div`
  position: relative;
  width: max-content;
  //font-size: 28pt;
  font-size: 3vw;

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
`;
export const TitleB = styled.div`
  position: relative;
  width: max-content;
  font-size: 3vw;

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
`;

export const Blurb = styled.div`
  text-align: justify;
  width: 45vw;
  margin: auto;
  left: 0;
  right: 0;
  font-size: 1.5vw;
  font-weight: 600;
  @media (max-width: 800px) {
    margin-top: 25vh;
    position: absolute;
    width: 68vw;
    font-size: 6vw;
    font-weight: 500;
  }
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
  margin-left: 5vw;
  width: max-content;
  position: relative;
  z-index: 1;
  @media (max-width: 800px) {
    position: absolute;
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 12px;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: -5%;
    bottom: -5%;
    z-index: -1;
  }
`;

export const WordDiv = styled.div`
  margin: auto 50px auto;
  width: 45vw;
  text-align: center;
  @media (max-width: 800px) {
    width: 75vw;
  }
`;
