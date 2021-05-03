import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 20px;
    border: 1px solid #eee;

    button {
        border-radius: 0 0 20px 20px
    }

    img {
        max-height: 250px;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div {
        padding: 1rem;
        height: 100%;
        font-family: Arial, Helvetica, sans-serif;
    }
`;