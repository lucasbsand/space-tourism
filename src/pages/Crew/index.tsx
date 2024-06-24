import { useState } from 'react';

import { Background, PageHeader } from '../../styles/global';
import * as S from './styled';

import BgDesktop from '../../assets/crew/background-crew-desktop.jpg';
import BgTablet from '../../assets/crew/background-crew-tablet.jpg';
import BgMobile from '../../assets/crew/background-crew-mobile.jpg';
import data from '../../data.json';

function Crew() {
  const [index, setIndex] = useState(0);
  const { crew } = data;
  console.log(crew);

  return (
    <S.MainContainer>
      <Background
        bgdesktop={BgDesktop}
        bgtablet={BgTablet}
        bgmobile={BgMobile}
      />
      <S.Section>
        <PageHeader>
          <span>02</span>
          <h1>MEET YOUR CREW</h1>
        </PageHeader>
        <S.InfoContainer>
          <S.Info>
            <span>{crew[index].role}</span>
            <span>{crew[index].name}</span>
            <p>{crew[index].bio}</p>
            <S.TabList>
              {crew.map((person, i) => (
                <S.Button
                  key={person.name}
                  isSelected={i == index}
                  onClick={() => setIndex(i)}
                ></S.Button>
              ))}
            </S.TabList>
          </S.Info>
          <S.Picture>
            <source srcSet={crew[index].images.webp} type='image/webp' />
            <img src={crew[index].images.png} alt={crew[index].name} />
          </S.Picture>
        </S.InfoContainer>
      </S.Section>
    </S.MainContainer>
  );
}

export default Crew;
