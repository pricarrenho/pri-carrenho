import Image from "next/image";
import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 64px;

  @media (min-width: 800px) {
    margin-top: 148px;
    margin-bottom: 148px;
  }
`;

export const WrapperContent = styled.div`
  margin-top: 40px;
  position: initial;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 800px) {
    position: relative;
    margin-top: 48px;
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
    position: initial;
    width: auto;
    bottom: 20px;
    left: 400px;

    @media (min-width: 800px) {
      position: absolute;
      background-color: #0e0e11;
      width: 600px;
      gap: 24px;
      padding: 24px 48px;
    }
  `}
`;

export const ContentButtons = styled.div`
  display: flex;
  gap: 24px;
`;

export const PortfolioImage = styled(Image)`
  object-fit: cover;
  border-radius: 4px;
  width: auto;
  height: auto;
  display: block;

  @media (min-width: 800px) {
    width: 500px;
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

    @media (min-width: 800px) {
      padding: 8px 16px;
    }
  `}
`;
