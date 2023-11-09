import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
  margin-bottom: 64px;

  @media (min-width: 800px) {
    margin-top: 148px;
    margin-bottom: 148px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 32px;
  margin-top: 24px;
  margin-bottom: 16px;

  @media (min-width: 800px) {
    flex-direction: row;
    margin-top: 56px;
    margin-bottom: 36px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    background-color: initial;
    padding: 16px;
    z-index: 1;

    @media (min-width: 800px) {
      gap: 24px;
    }
  `}
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 24px;
`;

export const PortfolioImage = styled(Image)`
  border-radius: 4px;
  width: 343px;
  height: 206px;
  display: block;

  @media (min-width: 800px) {
    min-width: 500px;
    min-height: 320px;
  }
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    color: ${theme.colors.white};
    position: relative;
    margin-right: auto;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      border-bottom: 2px solid ${theme.colors.pink[700]};
      left: 0;
      bottom: 2px;
      z-index: -1;
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.lg};
    }
  `}
`;

export const Description = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    text-align: justify;
    line-height: 24px;

    p {
      color: ${theme.colors.neutral[300]};
    }

    strong {
      color: ${theme.colors.white};
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.md};
      line-height: 28px;
    }
  `}
`;

export const Button = styled(Link)`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.pink[700]};
    font-weight: 500;
    padding: 8px 14px;
    color: ${theme.colors.white};
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

    @media (min-width: 800px) {
      padding: 8px 16px;
    }
  `}
`;
