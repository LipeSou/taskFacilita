import CardCheckbox from './CardCheckbox.vue'
import CardCheckboxContainer from './CardCheckboxContainer.vue'
import CardContainer from './CardContainer.vue'
import CardDescription from './CardDescription.vue'
import CardDropdown from './CardDropdown.vue'
import CardTag from './CardTag.vue'

// Design pattern para componentes chamado composition que permite deixar o componente mais modular editável e sem tantas verificaçòes em um arquivo só,
// aqui fica a importação de cada subcomponente
const Card = {
  CardContainer,
  CardCheckboxContainer,
  CardCheckbox,
  CardDescription,
  CardTag,
  CardDropdown
}

export default Card
