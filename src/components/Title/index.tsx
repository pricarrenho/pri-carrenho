import { TitleProps } from "./type";
import * as S from "./styles";

const Title = ({ children, styleType }: TitleProps) => {
  return (
    <S.Wrapper styleType={styleType}>
      <S.Title>{children}</S.Title>
    </S.Wrapper>
  );
};

export default Title;
