import styled from 'styled-components'

const WrapperSponsorItem = styled.div`
    display: flex;
    justify-content: center;
    width: 130px;
    height: 90px;

    &:hover{
        background-color: #101433;
    }

    img {
      width: 125px;
      height: 80px;
    }
`

type props = {
    src : string , 
    alt : string,
    href : string;
}
export default function SponsorItem({src , alt , href} : props) {
  return (
    <WrapperSponsorItem>
        <a href={href} target='_blank'>
          <img src={src} alt={alt} />
        </a>
    </WrapperSponsorItem>
  )
}
