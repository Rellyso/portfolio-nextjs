import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`

`;

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 8rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    border: none;
    padding: 1rem 2.5rem;
    color: #fff;
    font-weight: 300;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => theme.primary};
    transition: .5s;
    width: fit-content;

    &:disabled {
      opacity: .5;
    }

    &:not(:disabled):hover  {
      background: ${({ theme }) => darken(0.05, theme.primary)}
    }
  }

  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.5rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  border-radius: .5rem;
  outline: none;
  transition: .5s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;

export const Textarea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.inputBackground};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
  border-radius: .5rem;
  outline: none;
  transition: .5s;
  resize: none;

  grid-column: 1 / 3;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 700px) {
    grid-column: 1rem;
  }

  @media (max-width: 450px) {
    padding: 1.4rem;
    font-size: 1rem;
  }
`;
