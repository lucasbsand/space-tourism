import { useState } from 'react';

import { Background, Main, PageHeader } from '../../styles/global';
import * as S from './styled';

import BgDesktop from '../../assets/destination/background-destination-desktop.jpg';
import BgTablet from '../../assets/destination/background-destination-tablet.jpg';
import BgMobile from '../../assets/destination/background-destination-mobile.jpg';

import data from '../../data.json';

function Destination() {
  const [index, setIndex] = useState(0);
  const { destinations } = data;

  return (
    <Main>
      <Background
        bgdesktop={BgDesktop}
        bgtablet={BgTablet}
        bgmobile={BgMobile}
      />
      <S.Section>
        <PageHeader>
          <span>01</span>
          <h1>PICK YOUR DESTINATION</h1>
        </PageHeader>
        <S.DataContainer>
          <picture>
            <source
              srcSet={destinations[index].images.webp}
              type='image/webp'
            />
            <img
              src={destinations[index].images.png}
              alt={destinations[index].name}
            />
          </picture>
          <S.InfoContainer>
            <S.TabList>
              {destinations.map((destination, i) => (
                <div key={destination.name}>
                  <input
                    type='radio'
                    name='destination'
                    id={destination.name}
                    value={i}
                    checked={i === index}
                    onChange={(e) => setIndex(+e.target.value)}
                  />
                  <label htmlFor={destination.name}>
                    {destination.name.toUpperCase()}
                  </label>
                </div>
              ))}
            </S.TabList>
            <S.InfoBody>
              <span>{destinations[index].name}</span>
              <p>{destinations[index].description}</p>
            </S.InfoBody>
            <S.InfoFooter>
              <div>
                <p>AVG. DISTANCE</p>
                <span>{destinations[index].distance}</span>
              </div>
              <div>
                <p>Est. travel time</p>
                <span>{destinations[index].travel}</span>
              </div>
            </S.InfoFooter>
          </S.InfoContainer>
        </S.DataContainer>
      </S.Section>
    </Main>
  );
}

export default Destination;
