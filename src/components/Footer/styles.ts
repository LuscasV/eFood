import styled from "styled-components";
import { Div } from "../Hero/styles";
import { colors } from "../../styles";

export const Image = styled.div`
    width: 100%;
    height: 298px;
    display: block;
    margin-top: 120px;

    ${Div} {
        padding-top: 40px;
        
        p {
            color: ${colors.primary};
            font-weight: 400;
        }
    }
`

export const List = styled.ul`
    display: flex;
    padding-top: 32px;
    margin-bottom: 80px;
    margin-right: 12px;
`

export const ListItem = styled.li`
    margin-left: 8px;
    cursor: pointer;

    img {
        height: 24px;
    }
`