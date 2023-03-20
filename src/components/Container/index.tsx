import { ContainerProps } from "./types";
import * as S from "./styles";

function Container({ children, ...props }: ContainerProps) {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
}

export default Container;
