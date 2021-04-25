import { Header } from 'components/header'
import { Nav } from 'components/Nav'
import { Feature } from 'components/feature'
import { Team } from 'components/team'
import { Contact } from 'components/contact'
import { Footer } from 'components/footer'

export default function Home() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <Header />
      <Feature />
      <Team />
      <Contact />
      <Footer />
    </>
  )
}
