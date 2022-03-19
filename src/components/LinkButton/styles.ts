import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem; 
    border: none;
    border-radius: 0.5rem;
    transition: .5s;

    width: fit-content;
    margin: 0 auto;

    &:hover {
      background: ${({ theme }) => darken(0.05, theme.primary)};
    }

    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }

    @media (max-width: 700px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
`;
