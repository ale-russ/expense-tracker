import { styled } from "styled-components";

export const MainLayout = styled.div`
  padding: 2rem;
  height: 100vh;
  display: flex;
  gap: 2rem;

  /* breakpoints */
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    padding: 0.3rem;
    overflow: scroll;
    width: 100%;
  }
`;

export const InnerLayout = styled.div`
  padding: 2rem 1.5rem;
  width: 100%;
  /* overflow: hidden; */
`;
