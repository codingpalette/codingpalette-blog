import styled from '@emotion/styled'

export const ButtonBox = styled.button`
  width: ${props => props.width};
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: ${props => (props.theme === 'primary' ? '#655fb0' : props.theme === 'secondary' ? '#EF4444' : '#e9ecef')};
  color: ${props => (props.theme === 'tertiary' ? '#495057' : '#fff')};
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 500;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover {
    opacity: 0.8;
  }
`
