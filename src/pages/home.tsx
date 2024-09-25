import HeroSection from "../components/heroSection";
import SectionDefault from "../components/sectionDefault";
import { Negrito, TitleDefault, ButtonDefault} from "../styles/styledComponents";
import TitleWithHat from "../components/TitleWithHat";
import SectionCTA from "../components/sectionCTA";
import SponsorSection from "../components/sponsorSection";
import FooterSection from "../components/footerSection";

import ImageValorantTeam from "../assets/images-event/valorant-team.jpg"
import ImageTrofeu from "../assets/images-event/trofeu.jpg"
import ImageFallen from "../assets/images-event/fallen-imperial.jpg"

export default function Home() {
  return (
    <>
      <HeroSection/>

      <SectionDefault 
        rigth
        src={ImageFallen}
        alt="Imagem do Fallen Um dos Maiores Capeões desse evento"
      >
        <TitleWithHat
        content="Games camp"
        hat="Maior evento de games do País" />
        <p>
          A gamesCamp retorna ao Rio de 11 a 18 de outubro de 2024! Não perca a maior experiência de esports no Brasil! Com um prêmio de meio milhão de dólares em jogo, 32 das melhores equipes do mundo competirão em quatro modalidades de e-esportes. A Farmasi Arena será o palco onde esses jogadores excepcionais lutarão pelo título de Campeões da gamesCamp em solo brasileiro.
        </p>
        <p>
          Os ingressos estarão disponíveis a partir de 5 de abril, às 12:00 BRT. Não perca a oportunidade de testemunhar a história sendo feita!
        </p>

        <div>
          <Negrito>500.000 - Em premiações</Negrito>
          <Negrito>7 dias de Evento</Negrito>
          <Negrito>32 equipes se enfrentando</Negrito>
        </div>

        <ButtonDefault>Inscrever-se</ButtonDefault>


      </SectionDefault>

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
      </SectionDefault>

      <SectionDefault 
        rigth
        src={ImageTrofeu}
        alt="Imagem do time da Genesis no campeonato de valorant"
      >
        <TitleWithHat
        content="Premiações"
        hat="50 Mil para cada vencedor!" />
        <p>
          O nosso evento não só oferece experiências inesquecíveis, mas também proporciona oportunidades incríveis de premiação. <Negrito>Com um total de R$ 500.000,00 em prêmios</Negrito>, os participantes terão a chance de competir em cinco modalidades de jogos, cada uma com sua própria premiação especial.
        </p>
        <p>
          Todos os participantes terão a chance de competir por esses prêmios incríveis, tornando o evento ainda mais emocionante e competitivo. Venha mostrar suas habilidades e lute para ser o campeão em uma ou mais modalidades!
        </p>
      </SectionDefault>

      <SectionCTA
        content="Quer participar da GamesCamp 2024?"
      />

      <SponsorSection/>

      <FooterSection/>
    </>
  )
}
