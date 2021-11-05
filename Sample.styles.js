import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Slogan = styled.h1`
    color: #ffce76;
    margin: 0;
    font-weight: 500;
    font-size: 2.25rem;
    letter-spacing: 1px;
`

export const SloganInfoDiv = styled.div`
    background-color: ${({theme}) => theme.bgAlt};
    padding: 35px;
    border-radius: 25px;
`

export const StudentImageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-content: end;
`
export const BriefSlogan = styled.p`
    margin-top: 15px;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1px;
    color: ${({theme}) => theme.accent.counter};
`

export const Contact = styled(Button)`
    background-color: ${({theme}) => theme.accent.alternate };
    color: #2d2d2d;
    border: none;
    border-radius: 5px;
    // box-shadow: 0 0 15px ${({theme}) => theme.accent.alternate };
    cursor: pointer;
    padding: 10px;
    margin-top: 1.5rem;
`

export const DemoClass = styled.div`
    display: flex;
    flex-direction: column;
    // margin: 15px;
`

export const DemoClassThumbNail = styled.img`
`;

export const DemoClassTitle = styled.span`
    font-size: 14px;
    font-weight: 400;
`

export const DemoClassSubject = styled.span`
    font-size: 14px;
    font-weight: 200;
`

export const DemoClassInfo = styled.h1`
    font-weight: 300;
    font-size: 24px;
`

export const ThumbNailDiv = styled.div`
    width: 300px;
    height: 175px;
    border-radius: 10px;
    margin-bottom: 0.8rem;
`

export const DemoClassLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.text};
    margin: 25px;
`
export const DemoClassHead= styled.span`
    font-size: 14px;
    font-weight: 200;
`