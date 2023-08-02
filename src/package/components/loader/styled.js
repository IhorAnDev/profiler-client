import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderWrap = styled.div`
  position: ${({ isInner }) => (isInner ? 'absolute' : 'fixed')};
  width: ${({ isInner }) => (isInner ? 'auto' : '100vw')};
  height: ${({ isInner }) => (isInner ? 'auto' : '100vh')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  background: transparent;
`;

const SpinnerImg = styled.img`
  display: block;
  max-width: 125px;
  width: 100%;
  animation: ${rotateAnimation} 1s linear infinite;
`;

export { LoaderWrap, SpinnerImg };
