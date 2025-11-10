import styled from "styled-components";
import {Title} from "./components/Title/title.tsx";
import {Products} from "./components/Products";
import {Footer} from "./components/Footer/footer.tsx";
import "./App.css";
import {useEffect, useState} from "react";
import { Spotlight } from "./components/Spotlight/spotlight.tsx";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

`

const App = () => {
    const [titleClassName, setTitleClassName] = useState<string>("before-scroll");

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
            <Spotlight/>
            <Products/>
            <Footer />
        </Content>
    );
};

export default App;
