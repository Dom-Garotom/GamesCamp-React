import { TitleDefault , MainTitle , ButtonDefault , ButtonCTA , ButtonExit} from "../styles/styledComponents"
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

    </>
  )
}
