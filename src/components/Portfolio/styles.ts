import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 148px;
  margin-bottom: 148px;
`;

export const WrapperContent = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 500px;
  gap: 48px; */
  /* align-items: center; */
  margin-top: 48px;
  position: relative;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 24px;
    background-color: #0e0e11;
    padding: 24px 48px;
    z-index: 1;
    position: absolute;
    width: 600px;
    bottom: 20px;
    left: 400px;
  `}
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 24px;
`;

export const PortfolioImage = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: 500px;
  display: block;
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.lg};
    color: ${theme.colors.pink[700]};
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    text-align: justify;
    line-height: 28px;

    strong {
      color: ${theme.colors.pink[700]};
    }
  `}
`;

export const Button = styled(Link)`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.pink[700]};
    padding: 8px 16px;
    color: ${theme.colors.pink[700]};
    overflow: hidden;
    position: relative;
    transition-delay: 0.2s;
    transition: 0.2s;

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      top: -50px;
      z-index: -1;
      height: 300%;
      width: 0;
      background: ${theme.colors.pink[700]};
      transition: 1s;
      transform: rotate(-20deg);
    }

    &:hover {
      color: ${theme.colors.white};

      &::before {
        width: 250%;
      }
    }
  `}
`;
