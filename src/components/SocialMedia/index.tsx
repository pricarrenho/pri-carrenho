import Link from "next/link";
import * as S from "./styles";
import github from "../../assets/img/github.png";
import linkedin from "../../assets/img/linkedin.png";
import email from "../../assets/img/email.png";
import Image from "next/image";

const SocialMedia = () => {
  return (
    <S.Wrapper>
      <S.ImgLink href="https://github.com/pricarrenho" target="_blank">
        <Image src={github} alt="logo github" width={30} height={24} />
      </S.ImgLink>

      <S.ImgLink
        href="https://www.linkedin.com/in/priscilla-carrenho/"
        target="_blank"
      >
        <Image src={linkedin} alt="logo linkedin" width={40} height={25} />
      </S.ImgLink>

      <S.ImgLink href="mailto:priscillaonil@gmail.com" target="_blank">
        <Image src={email} alt="logo email" width={30} height={30} />
      </S.ImgLink>
    </S.Wrapper>
  );
};

export default SocialMedia;
