import styled from "styled-components";
import Spacer from "./Spacer";
import backgroundImage from "./images/backgroundImage.jpeg";
import { FaUser, FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine, RiPlayFill } from "react-icons/ri";

const Wrapper = styled.div`
  position: relative;
  background: transparent;

  .coverImage {
    position: absolute;
    z-index: -1;
    min-width: 100%;
    max-height: 100vh;
  }
  .logoText {
    color: white;
  }

  .brand {
      color: white;
      margin: auto 0;
      text-shadow: 0.2rem 0.1rem 0.1rem  white;
  }

  .dropdown,
  button
  {
      color:white;
      margin-right 5rem;
  }
  .icons {
      color: #404040;
      font-size: 2.7rem;
      position: absolute;
      top: 5.3rem;
      margin:0 1rem;

  }
  .iconsNav{
      margin-right: 3.5rem;
  }

  .mainNavbar {
    background-color:#1a1a1a;
    padding: 3rem 0;
    grid-gap: 12rem;
  }

  .playBtn{
     background-color: #FF0000;
     font-size: 4rem;
     border-radius: 50%;
     padding: 1rem;
     margin-right:2rem;
     text-align: center;
     vertical-align: middle;
      
  }

  .search {
    background-color: #FF0000;
    font-size: 5rem;
     border-radius: 50%;
     padding: 1rem;
     margin-right:3rem;
     text-align: center;
     vertical-align: middle;
  }

  .subscribe{
    background-color: #FF0000;
     padding: 1.5rem;
     text-align: center;
     vertical-align: middle;
  }

  .active {
      color:#FF0000;
  }
`;

const Navbar = ({
  headerCaption,
  subText,
  image,
  imageMobile,
  chartCards,
  logoLight,
  getStartedLight,
  textDark,
  imageRight,
}) => {
  return (
    <Wrapper className="navbarWrapper ">
      <img src={backgroundImage} alt="Cover" className="coverImage" />
      <Spacer y={1.2} />
      <div className={`gridColumn textMedium mainNavbar `}>
        <div className="flexRow  brand textLargeBold container ">
          <RiPlayFill className="playBtn" />
          STREAMLAB
        </div>
        <div className="dropdown ">
          <button className="dropbtn textMedium active">
            Home
            <RiArrowDropDownLine className="icons" />
          </button>
          <button className="dropbtn textMedium">
            Movies
            <RiArrowDropDownLine className="icons" />
          </button>
          <button className="dropbtn textMedium">
            Tv Shows
            <RiArrowDropDownLine className="icons" />
          </button>
          <button className="dropbtn textMedium">
            Video
            <RiArrowDropDownLine className="icons" />
          </button>
          <button className="dropbtn textMedium">
            Pages
            <RiArrowDropDownLine className="icons" />
          </button>
          <FaSearch className="iconsNav" />
          <FaUser className="iconsNav search" />
          <strong className="iconsNav subscribe">SUBSCRIBE</strong>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
