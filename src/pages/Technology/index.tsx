import { useState } from 'react';

import { Background } from '../../styles/global';
import * as S from './styled';

import BgDesktop from '/assets/technology/background-technology-desktop.jpg';
import BgTablet from '/assets/technology/background-technology-tablet.jpg';
import BgMobile from '/assets/technology/background-technology-mobile.jpg';

import data from '../../data.json';

function Technology() {
  const [index, setIndex] = useState(0);
  const { technology } = data;

  return (
    <S.MainContainer>
      <Background
        bgdesktop={BgDesktop}
        bgtablet={BgTablet}
        bgmobile={BgMobile}
      />
      <S.Section>
        <S.Header>
          <span>03</span>
          <h1>SPACE LAUNCH 101</h1>
        </S.Header>
        <S.InfoContainer>
          <S.Info>
            <S.TabList>
              {technology.map((tech, i) => (
                <div key={tech.name}>
                  <input
                    type='radio'
                    name='tech'
                    id={tech.name}
                    value={i}
                    onChange={(e) => setIndex(+e.target.value)}
                    checked={index === i}
                  />
                  <label htmlFor={tech.name}>{++i}</label>
                </div>
              ))}
            </S.TabList>
            <div>
              <h2>THE TERMINOLY...</h2>
              <span>{technology[index].name}</span>
              <p>{technology[index].description}</p>
            </div>
          </S.Info>
          <S.Picture>
            <source
              media='(max-width: 768px)'
              srcSet={technology[index].images.landscape}
            />
            <img
              src={technology[index].images.portrait}
              alt={technology[index].name}
            />
          </S.Picture>
        </S.InfoContainer>
      </S.Section>
    </S.MainContainer>
  );
}

export default Technology;
