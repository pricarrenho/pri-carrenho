import { TitleProps } from "./type";
import * as S from "./styles";

const Title = ({ children, styleType }: TitleProps) => {
  return <S.Title styleType={styleType}>{children}</S.Title>;
};

export default Title;
