import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    strong {
      color: ${theme.colors.pink[700]};
    }
  `}
`;

export const Subtitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.md};
    position: relative;
    min-height: 32px;

    strong {
      color: ${theme.colors.pink[700]};
    }

    .Typewriter__cursor {
      position: absolute;
      right: -2px;
      top: 0px;
    }
  `}
`;
