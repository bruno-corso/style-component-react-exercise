import { FormEvent, useState } from 'react'
import { BotaoBusca, FormBusca, InputBusca } from './styles'

import styles from './FormVagas.module.css'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormBusca onSubmit={aoEnviarForm}>
      <InputBusca
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoBusca type="submit">Pesquisar</BotaoBusca>
    </FormBusca>
  )
}
export default FormVagas
