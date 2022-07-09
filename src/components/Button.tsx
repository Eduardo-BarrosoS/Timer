import { ButtonContainer, TButtonVariant } from './Button.styles'

interface IButtonProps {
  variant?: TButtonVariant
}

export const Button = ({ variant = 'primary' }: IButtonProps) => {
  return (
    <>
      <ButtonContainer variant={variant}>Enviar</ButtonContainer>
    </>
  )
}
