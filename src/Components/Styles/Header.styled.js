import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: ${(props) => props.theme.colors.header};
    padding: 40px 0;
    height: 100%;
    width: 100%;
`;

export default StyledHeader