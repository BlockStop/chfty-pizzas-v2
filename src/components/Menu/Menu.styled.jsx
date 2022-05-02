import styled from 'styled-components';

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
  height: 100vh;
  text-align: left;
  padding: 1rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  width: 25%;
  border-left: 1px solid black;

  @media screen and (min-width: 800px) and (max-width: 1100px) {
    width: 50%;
}
  @media (max-width: 800px) {
      width: 100%;
    }

  a {
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    font-family: Siracha-regular;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    border-bottom: 1px solid black;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 0.88rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

export const StyledSocials = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        height: 2em;
        width: 2em;
        margin: 1em;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform:scale(1.2, 1.2);
        }
    }

    a {
        border-bottom: none;
    }



`;

export const StyledSocialsCol = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;