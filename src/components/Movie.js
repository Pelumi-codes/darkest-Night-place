import styled, { withTheme } from "styled-components";
import Spacer from "./Spacer";
import { RiPlayFill } from "react-icons/ri";
import {
  MdOutlineArrowForwardIos,
  MdOutlineArrowBackIosNew,
} from "react-icons/md";

const Wrapper = styled.div`
  .movieCaption {
    color: white;
  }

  .movieInfo {
    color: white;
  }

  .circleWhite {
    background-color: white;
    padding: 0.1rem;
    border-radius: 50%;
    height: 0.4rem;
    width: 0.4rem;
    margin: 1rem 0.1rem 0;
  }
  .movieInfo {
    display: flex;
    flex-direction: columns;
    justify-content: space-between;
    max-width: 40%;
  }

  .movieR {
    background-color: transparent;
    border: 1px solid white;
    padding: 0.3rem 0.8rem;
    vertical-align: middle;
    text-align: center;
  }

  .movieCap {
    background-color: #ffc000;
    border-radius: 0.2rem;
    padding: 0.3rem 1rem;
    text-align: center;
    color: #1a1a1a;
  }

  .action {
    color: white;
    background-color: #ff0000;
    text-align: center;
    vertical-align: middle;
    padding: 0.3rem 1rem;
  }

  .playTrailer,
  button {
    color: white;
  }
  .movieDescription {
    color: white;
  }

  .playNow {
    background-color: #ff0000;
    padding: 2rem 3rem;
    text-align: center;
    margin-right: 4rem;
    vertical-align: middle;
  }

  .moviePlay {
    background-color: white;
    font-size: 7rem;
    border-radius: 50%;
    padding: 1rem;
    margin-right: 2rem;
    text-align: center;
    vertical-align: middle;
    color: #ff0000;
  }
  .movieTrailer {
    margin: auto 0;
  }
  .movieWrapper {
    position: absolute;
  }

  .arrowLeft {
    color: white;
    font-size: 4rem;
    position: absolute;
    top: 39rem;
    left: 0.6rem;
  }

  .arrowRight {
    color: white;
    font-size: 4rem;
    position: absolute;
    top: 39rem;
    right: 0.6rem;
  }
`;
const Movie = () => {
  return (
    <Wrapper className="movieWrapper">
      <Spacer y={2.2} />
      <h1 className="displayLargeBold movieCaption container">
        THE DARKEST <br /> NIGHTPLACE
      </h1>
      <Spacer y={1.2} />
      <div className="movieInfo container">
        <h4 className="movieR textSmallBold">R</h4>
        <small className="circleWhite"></small>
        <h4 className="textSmallBold">1hr 46mins</h4>
        <small className="circleWhite"></small>
        <button className="movieCap textSmallBold">IMDb</button>
        <h5 className="moviefig textSmallBold">0</h5>
        <small className="circleWhite textSmallBold"></small>
        <h4 className="textSmallBold">2017</h4>
        <small className="circleWhite"></small>
        <button className="action textSmallBold">Action</button>
      </div>
      <Spacer y={3} />
      <h1 className="movieDescription textMediumBold container">
        Streamlab is a long established fact that a render will be distracted by
        the <br />
        readable content of a page when streamlab at its layout. The point of
        using <br /> Lorem Streamlab is that it has a more or less normal
        distribiution of <br /> streamlab as opposed StreamLab
      </h1>
      <Spacer y={3.5} />
      <div className="playTrailer flexRow container">
        <button className="playNow textMedium">PLAY NOW</button>
        <RiPlayFill className="moviePlay" />
        <h2 className="movieTrailer textMediumBold ">WATCH TRAILER</h2>
      </div>
      <MdOutlineArrowForwardIos className="arrowRight" />
      <MdOutlineArrowBackIosNew className="arrowLeft" />
    </Wrapper>
  );
};
export default Movie;
