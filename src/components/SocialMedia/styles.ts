import Link from "next/link";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 8px;
    margin-left: 50px;
    position: relative;

    &:before {
      content: "";
      position: absolute;
      width: 40px;
      border-bottom: 1px solid ${theme.colors.pink[700]};
      left: -50px;
      bottom: 50%;
    }
  `}
`;

export const ImgLink = styled(Link)`
  &:hover {
    img {
      filter: brightness(2);
    }
  }
`;
