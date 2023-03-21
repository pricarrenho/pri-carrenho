import styled, { css } from "styled-components";
import { TitleStyleType } from "./type";

type WrapperProps = {
  styleType: TitleStyleType;
};

const WrapperModifier = {
  primary: () => css`
    text-align: center;
  `,
  secondary: () => css`
    text-align: left;
  `,
};

export const Title = styled.h2<WrapperProps>`
  ${({ theme, styleType }) => css`
    margin-bottom: 24px;

    ${styleType && WrapperModifier[styleType]()}
  `}
`;
