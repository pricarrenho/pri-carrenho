import { HeaderProps } from "./types";
import * as S from "./styles";
import Typewriter from "typewriter-effect";
import SocialMedia from "../SocialMedia";

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
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

      <SocialMedia />
    </S.Wrapper>
  );
};

export default Header;
