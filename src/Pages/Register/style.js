import styled from "styled-components";

export const BodyCreateAcc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  .header-form {
    height: 20%;
  }

  .header-form h3 {
    padding: 0.5rem;
    height: 20%;
  }

  section:first-child {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 2rem;

    min-width: 15rem;
  }

  section h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: #9e9e9e;
    font-size: 1rem;
    min-width: 15rem;
  }

  @media (min-width: 521px) {
    /* Styles for screens wider than 520px */
    .header-form {
      height: auto;
    }

    section:first-child {
      margin: 2rem 5rem;
    }
  }
`;

export const SectionButton = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
  height: 80%;

  @media (max-width: 520px) {
    flex-direction: column;
    gap: 1rem;

  }
`;

export const StyledButton = styled.button`
  width: 12.5rem;
  height: 2.3rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#fff" : "#000")};
  background-color: ${(props) => (props.selected ? "#000" : "#e0e0e0")};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
    border: 1px solid #000;
  }
`;

export const SectionForm = styled.section`
  width: 100%;
  min-width: 15rem;
  height: 100%;
  position: relative;
`;

