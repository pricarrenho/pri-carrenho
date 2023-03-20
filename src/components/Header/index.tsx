import { HeaderProps } from "./types";
import * as S from "./styles";
import Container from "../Container";
import Typewriter from "typewriter-effect";

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Container>
      <S.Wrapper>
        <S.Title dangerouslySetInnerHTML={{ __html: title }} />
        <S.Subtitle>
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter.typeString(subtitle).pauseFor(2500).start();
            }}
          />
        </S.Subtitle>
      </S.Wrapper>
    </Container>
  );
};

export default Header;
