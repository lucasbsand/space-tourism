import { Background, Main } from '../../styles/global';
import * as S from './styled';

import BgDesktop from '../../assets/home/background-home-desktop.jpg';
import BgTablet from '../../assets/home/background-home-tablet.jpg';
import BgMobile from '../../assets/home/background-home-mobile.jpg';
import ExploreButton from '../../components/ExploreButton';

function Home() {
  return (
    <Main>
      <Background
        bgdesktop={BgDesktop}
        bgtablet={BgTablet}
        bgmobile={BgMobile}
      />
      <S.Section>
        <article>
          <h1>SO, YOU WANT TO TRAVEL TO</h1>
          <span>SPACE</span>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <ExploreButton />
      </S.Section>
    </Main>
  );
}

export default Home;
