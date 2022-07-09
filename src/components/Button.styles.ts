import styled, { css } from 'styled-components'

export type TButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface IButtonContainerProps {
  variant: TButtonVariant
}

const buttonVariant = {
  primary: 'purple',
  secondary: 'blue',
  danger: 'orange',
  success: 'green',
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: 110px;
  height: 50px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.gray900};
  margin: 8px;
  color: ${(props) => props.theme.primaryColor};

  background-color: ${(props) => props.theme.green300};

  /* ${(props) =>
    css`
      background-color: ${buttonVariant[props.variant]};
    `} */
`
