import styled, { css } from "styled-components";
import { TitleStyleType } from "./type";

type WrapperProps = {
  styleType: TitleStyleType;
};

const WrapperModifier = {
  primary: () => css``,

  secondary: () => css`
    justify-content: center;

    @media (min-width: 800px) {
      justify-content: left;
    }
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ styleType }) => css`
    display: flex;
    justify-content: center;

    ${styleType && WrapperModifier[styleType]()}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 24px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      border-bottom: 2px solid ${theme.colors.neutral[500]};
      left: 0;
      bottom: -4px;
    }
  `}
`;
