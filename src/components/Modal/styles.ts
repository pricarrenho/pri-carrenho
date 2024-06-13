import Image from "next/image";
import styled, { css } from "styled-components";

export const DropShadow = styled.div`
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  max-width: 1200px;
  max-height: min(800px, calc(100vh - 120px));
  padding: 0 16px;
  position: relative;
`;

export const ModalCloseWrapper = styled.div`
  position: absolute;
  top: -56px;
`;

export const ModalBody = styled.div`
  ${({ theme }) => css`
    overflow: auto;
    width: 100%;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background: white;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.neutral[400]};
    }
  `}
`;

export const PortfolioPhoto = styled(Image)`
  display: block;
  height: auto;
  width: 100%;
`;

export const CloseBtn = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: transparent;
    padding: 8px;

    svg {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xl};
      transition: color 0.2s ease;
    }

    &:hover {
      svg {
        color: ${theme.colors.pink[500]};
      }
    }
  `}
`;
