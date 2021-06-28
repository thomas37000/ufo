import styled from 'styled-components';

const ToggleContainer = styled.button`
    position: relative;
    display: flex;
    justify-content: space-between;
    background: ${({ theme }) => theme.gradient};
    width: 8rem;
    height: 3.5rem;
    margin: 0 auto;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.toggleBorder};
    font-size: 0.5rem;
    padding: 0.5rem;
    overflow: hidden;
    cursor: pointer;

    img {
      max-width: 2.5rem;
      height: auto;
      transition: all 0.3s linear;

      &:first-child {
        transform: ${({ lightTheme }) =>
          lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      }

      &:nth-child(2) {
        transform: ${({ lightTheme }) =>
          lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      }
    }
  `;

  export default ToggleContainer;