import HeroSection from "../components/heroSection";
import SectionDefault from "../components/sectionDefault";
import { TitleDefault } from "../styles/styledComponents";
import ImageValorantTeam from "../assets/images-event/valorant-team.jpg"

export default function Home() {
  return (
    <>
      <HeroSection/>
      <SectionDefault 
        src={ImageValorantTeam}
        alt="Imagem do time da Genesis no campeonato de valorant"
      >
        <TitleDefault>Local do evento</TitleDefault>
        <p>
          O evento será realizado na prestigiosa Farmasi Arena, localizada no coração do bairro da Barra da Tijuca, no Rio de Janeiro. A arena está situada na Avenida Embaixador Abelardo Bueno, número 3401, um ponto de fácil acesso e reconhecido por receber grandes eventos e shows de renome.
        </p>
        <p>
          <b>O evento acontecerá de 11 de outubro a 18 de outubro de 2024.</b> Prepare-se para uma semana de experiências inesquecíveis, palestras inspiradoras, workshops interativos e muito mais.
          Não perca essa oportunidade única de participar de um evento que promete ser um marco no calendário de 2024. Marque na sua agenda e venha se juntar a nós na Farmasi Arena!
        </p>
      </SectionDefault>''
    </>
  )
}
