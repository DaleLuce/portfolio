import styled from "styled-components";

export const JobContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  width: 100vw;
  height: 75vh;
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

export const Card = styled.div`
  width: 95%;
  height: 65%;
  margin: 20px;
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
  box-shadow: 0px 0px 30px 12px rgba(0, 0, 0, 0.71);
  background-color: gray;
`;

export const MainDiv = styled.div`
  display: inline-flex;
  margin: 25px;
  margin-bottom: 90px;
`;

export const Title = styled.div`
  position: relative;
  width: max-content;
  font-size: 28pt;
  font-weight: 700;
  height: max-content;
  margin: 20px;
  margin-bottom: 20px;
  z-index: 1;

  &:after {
    content: "";
    background-color: black;
    background-color: ${(props) => props.theme.two};

    height: 12px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
  }
`;
export const TitleB = styled.div`
  position: relative;
  width: max-content;
  font-size: 28pt;
  font-weight: 700;
  height: max-content;
  margin: 20px;
  margin-bottom: 20px;
  z-index: 1;

  &:after {
    content: "";
    background-color: ${(props) => props.theme.two};
    height: 12px;
    display: block;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 15%;
    z-index: -1;
  }
`;

export const Blurb = styled.div`
  text-align: justify;
  width: 38vw;
  margin: auto;
  font-size: 1.3em;
  font-weight: 600;
`;
export const Image = styled.img`
  width: 40vw;
`;

export const TitleDiv = styled.div`
  width: 50vw;
  height: 20px;
  margin: auto;
  position: relative;
  z-index: 1;
`;

export const ImageDiv = styled.div`
  margin: auto;
  width: max-content;
  text-align: center;
  position: relative;
  z-index: 1;

  &:after {
    content: "";
    background-color: #083d77;
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
  height: 35vh;
  text-align: center;
`;
