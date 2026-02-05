import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  padding: 2.4rem 3.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  .title {
    font-size: 3.6rem;
    color: var(--secondary-color);
    text-align: center;
    font-family: var(--font-heading);
    letter-spacing: 0.04em;
  }
`;

export default Wrapper;
