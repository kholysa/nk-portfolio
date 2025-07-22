import styled from "styled-components";
import {Title} from "./components/Title/title.tsx";
import {Products} from "./components/Products";
import "./App.css";
import {useEffect, useState} from "react";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 2rem 2rem 2rem;
    gap: 2rem;

`

const App = () => {
    const [titleClassName, setTitleClassName] = useState<string>("");

    useEffect(() => {
        const isSticky = () => {
            const scrollTop = window.scrollY;
            if (scrollTop >= 250) {
                setTitleClassName("after-scroll");
            } else if (scrollTop <= 175) {
                setTitleClassName("before-scroll");
            }
        };

        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    }, []);

    return (
        <Content>
            <Title className={titleClassName}/>
            <Products/>
        </Content>
    );
};

export default App;
