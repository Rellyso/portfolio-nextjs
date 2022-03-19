import styled from 'styled-components';

type ContainerProps = {
  imgUrl: string
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 26rem;
  padding: 3rem 5rem;
  position: relative;

  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  
  > section {
      z-index: 2;
      
      h1 {
        color: ${(({ theme }) => theme.primary)};
        font-size: 3rem;
      }
      h2 {
        color: ${(({ theme }) => theme.secondary)};
        font-weight: 300;
        font-size: 2rem;
      }
  }

  > div.overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      
      background: ${(({ theme }) => theme.gradient)};
      opacity: 0.7;
      transition: 0.5s;
  }

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    section {
      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
