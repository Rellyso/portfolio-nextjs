import { GetStaticProps } from 'next';
import { ContactForm } from '../components/ContactForm';
import { Experiences } from '../components/Experiences';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';
import { getPrismicClient } from '../services/prismic';
import { HomeContainer } from '../styles/HomeStyles';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Knowledge />
        <ContactForm />
      </main>

      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const prismic = getPrismicClient({ previewData });

  const projectResponse = await prismic.getAllByType('projeto')

  console.log(projectResponse)

  return {
    props: {}
  }
}
