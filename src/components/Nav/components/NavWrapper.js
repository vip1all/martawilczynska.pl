import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { colors } from "../../../util/styles";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => justify};
  transition: all 150ms linear;
  padding: 0 ${({ padding }) => padding}rem;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  max-width: 100%;
  height: 10rem;
  z-index: 1000000;

  ${({ scrolled }) =>
    scrolled &&
    css`
      background: ${colors.blue};
      height: 5rem;
    `}
`;

NavWrapper.propTypes = {
  scrolled: PropTypes.bool,
  justify: PropTypes.string,
  padding: PropTypes.number
};

NavWrapper.defaultProps = {
  scrolled: false,
  justify: "center",
  padding: 0
};

export default NavWrapper;
