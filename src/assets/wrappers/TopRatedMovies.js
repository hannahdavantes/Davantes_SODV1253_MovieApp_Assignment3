import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 2.4rem 3.2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .title {
    font-size: 2.8rem;
    color: var(--secondary-color);
    text-align: center;
  }

  .movie-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.4rem;

    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
  }
`;

export default Wrapper;
