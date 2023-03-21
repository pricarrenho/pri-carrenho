import * as S from "./styles";

const Footer = ({ footer }: any) => {
  return (
    <S.Wrapper>
      <S.FooterContent dangerouslySetInnerHTML={{ __html: footer }} />
    </S.Wrapper>
  );
};

export default Footer;
