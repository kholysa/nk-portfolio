import styled from "styled-components";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Title } from "../components/Title/title.tsx";
import { Footer } from "../components/Footer/footer.tsx";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100%;
`;

export const AppLayout = () => {
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

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return (
    <Content>
      <Title className={titleClassName} />
      <Outlet />
      <Footer />
    </Content>
  );
};
