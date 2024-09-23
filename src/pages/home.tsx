import { TitleDefault , MainTitle , ButtonDefault , ButtonCTA , ButtonExit , Negrito} from "../styles/styledComponents"
import TitleWithHat from "../components/TitleWithHat"

export default function Home() {
  return (
    <>
      <MainTitle>Games Camp 2024</MainTitle>
      <TitleDefault>Teste</TitleDefault>
      <TitleWithHat content="Games Camp" hat="Melhor campeonato do pais" />
      <ButtonDefault>Inscreva-se</ButtonDefault>
      <ButtonCTA>Preencher o formulario</ButtonCTA>
      <ButtonExit>X</ButtonExit>
      <p>
        O evento será <b>realizado na prestigiosa Farmasi Arena</b>, localizada no coração do bairro da Barra da Tijuca, no Rio de Janeiro. <Negrito>A arena está situada na Avenida Embaixador Abelardo Bueno</Negrito>, número 3401, um ponto de fácil acesso e reconhecido por receber grandes eventos e shows de renome.
      </p>
      <a href="">teste</a>
    </>
  )
}
