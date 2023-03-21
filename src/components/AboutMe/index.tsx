import Title from "../Title";
import { AboutMeProps } from "./types";
import * as S from "./styles";
import Image from "next/image";

const AboutMe = ({ description, image }: AboutMeProps) => {
  return (
    <S.Wrapper>
      <S.Content>
        <div>
          <Title styleType="secondary">Um pouco sobre mim</Title>
          <S.Description dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <S.Img
          src={image}
          alt="Imagem de um notebook aberto e duas mãos segurando um café a sua frente"
          width={550}
          height={340}
        />
      </S.Content>
    </S.Wrapper>
  );
};

export default AboutMe;
