import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`0% {opacity: 1;}50% {opacity: 0.4;}100% {opacity: 1;}`;

const Rotate = styled.div`
  -webkit-animation-duration: 2s !important;
  animation-duration: 2s !important;
  -webkit-animation-fill-mode: forwards !important;
  animation-fill-mode: forwards !important;
  -webkit-animation-iteration-count: infinite !important;
  animation-iteration-count: infinite !important;
  -webkit-animation-timing-function: linear !important;
  animation-timing-function: linear !important;
  -webkit-animation-name: ${rotate} !important;
  animation-name: ${rotate} !important;
  background: #3e3e3e;
  background: linear-gradient(
    to right,
    #f3f3f3 2%,
    #e9e8e8 18%,
    #f3f3f3 33%
  ) !important;
  border-radius: 0px;
  min-height: ${props => props.height || "10px"}
  margin-top: ${props => props.margintop || "5px"}
`;

const LasyLoading = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;

function LazyLoad(props) {
  return (
    <LasyLoading>
      <Rotate height={props.height} margintop={props.margintop} />
    </LasyLoading>
  );
}

export default LazyLoad;
