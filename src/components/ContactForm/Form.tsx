import { FormContainer, Input, Textarea } from "./styles";

export function Form() {
  return (
    <FormContainer>
      <Input placeholder="Nome" required />
      <Input type="email" placeholder="Email" required />

      <Textarea placeholder="mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  )
}