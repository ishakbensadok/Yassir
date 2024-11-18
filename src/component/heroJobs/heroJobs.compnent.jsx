import Hero from '../hero/hero.component';

function HeroJobs() {
  const heroImgUrl = '/career-open-positions.webp';
  return (
    <Hero heroImgUrl={heroImgUrl} order={-1}>
      <h1 className='hero__heading'>Join Our Team – Simplify Life with Us!</h1>
      <p className='hero__description'>
        Check our open positions to join one of the fastest growing startups in
        Africa. Backed by investors of Google, Airbnb, and Spotify.
      </p>
    </Hero>
  );
}

export default HeroJobs;
