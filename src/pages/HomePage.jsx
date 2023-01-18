import CustomHelmet from 'src/components/shared/CustomHelmet';

import Hero from 'src/components/hero/Hero';
import About from 'src/components/about/About';

const HomePage = () => (
  <>
    <CustomHelmet title="Brella" />

    <Hero />
    <About />
  </>
)

export default HomePage;