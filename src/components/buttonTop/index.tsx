import { BiChevronUp } from "react-icons/bi";
import { ButtontoTop } from "../../styles/styledComponents";
import { useEffect, useState } from "react";


export default function ButtonTop() {
  const [isBlock, setIsBlock] = useState(true);

  const toTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () =>{
      const scrollTop = document.documentElement.scrollTop;
      const scroll = (100 * scrollTop ) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
  
      if (scroll > 20) {
        setIsBlock(true);
      } else {
        setIsBlock(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () =>{
      window.removeEventListener("scroll", handleScroll)
    }

  }, )


return (
  <ButtontoTop
    onClick={() => toTop()}
    block={isBlock}
  >
    <BiChevronUp />
  </ButtontoTop>
)
}
