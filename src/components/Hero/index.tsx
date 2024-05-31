import styles from './Hero.module.css'
import { FormHero, TituloHero } from './styles'

const Hero = () => (
  <FormHero>
    <div className="container">
      <TituloHero>
        As melhores vagas para tecnologia, design e artes visuais.
      </TituloHero>
    </div>
  </FormHero>
)

export default Hero
