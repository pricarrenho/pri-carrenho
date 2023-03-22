import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: 24px;
    position: relative;
    background: ${theme.colors.black};

    &::before {
      content: "< >";
      position: absolute;
      font-size: 24px;
      font-weight: 600;
      top: -18px;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.pink[700]};

      @media (min-width: 800px) {
        font-size: 32px;
        top: -24px;
      }
    }

    &::after {
      content: "</>";
      position: absolute;
      font-size: 24px;
      font-weight: 600;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      color: ${theme.colors.pink[700]};

      @media (min-width: 800px) {
        font-size: 32px;
      }
    }

    @media (min-width: 800px) {
      padding: 48px;
    }
  `}
`;

export const FooterContent = styled.footer`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.ssm};
    padding: 0px 0px 16px;

    strong {
      color: ${theme.colors.pink[700]};
    }

    @media (min-width: 800px) {
      font-size: ${theme.font.sizes.sm};
    }
  `}
`;
