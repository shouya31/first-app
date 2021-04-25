import { Header } from 'src/components/header'
import { Nav } from 'src/components/Nav'
import { Feature } from 'src/components/feature'
import { Team } from 'src/components/team'
import { Contact } from 'src/components/contact'
import { Footer } from 'src/components/footer'

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
