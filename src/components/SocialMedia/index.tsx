import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

import * as S from "./styles";

const SocialMedia = () => {
  return (
    <S.Wrapper>
      <S.ImgLink
        href="https://github.com/pricarrenho"
        target="_blank"
        aria-label="Confira meu github"
      >
        <FaGithub size={24} />
      </S.ImgLink>

      <S.ImgLink
        href="https://www.linkedin.com/in/priscilla-carrenho/"
        target="_blank"
        aria-label="Confira meu linkedin"
      >
        <FaLinkedinIn size={24} />
      </S.ImgLink>

      <S.ImgLink
        href="mailto:priscillaonil@gmail.com"
        target="_blank"
        aria-label="Entre em contato pelo email"
      >
        <IoMdMail size={26} />
      </S.ImgLink>
    </S.Wrapper>
  );
};

export default SocialMedia;
