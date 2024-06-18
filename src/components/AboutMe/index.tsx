import Title from "../Title";
import { AboutMeProps } from "./types";
import * as S from "./styles";

const AboutMe = ({ description, image }: AboutMeProps) => {
  return (
    <S.Wrapper>
      <S.WrapperContent>
        <S.Content>
          <Title styleType="secondary">Um pouco sobre mim</Title>
          <S.Description dangerouslySetInnerHTML={{ __html: description }} />
        </S.Content>
        <S.Img
          src={image}
          alt="Imagem de um notebook aberto e duas mãos segurando um café a sua frente"
          width={550}
          height={340}
          loading="eager"
        />
      </S.WrapperContent>
    </S.Wrapper>
  );
};

export default AboutMe;
