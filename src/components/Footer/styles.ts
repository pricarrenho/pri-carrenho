import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 48px;
    position: relative;
    background: ${theme.colors.black};

    &::before {
      content: "<  >";
      position: absolute;
      font-size: 32px;
      font-weight: 600;
      top: -24px;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.pink[700]};
    }

    &::after {
      content: "</>";
      position: absolute;
      font-size: 32px;
      font-weight: 600;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.pink[700]};
    }
  `}
`;

export const FooterContent = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.sm};
    padding: 0px 0px 24px;

    strong {
      color: ${theme.colors.pink[700]};
    }
  `}
`;
