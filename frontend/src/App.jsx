import { useState, useMemo } from "react";
import styled from "styled-components";
import bg from "./imgs/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./components/Orb/Orb";
import Navigation from "./components/Navigation/Navigation";
import Dashboard from "./components/Dashboard/Dashboard";
import Income from "./components/Income/Income";
import Expenses from "./components/Expenses/Expense";
import { useGlobalContext } from "./context/GlobalContext";
import Transactions from "./components/transactions/Transactions";

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Transactions />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <AppStyled bg={bg} className="App">
      <main>
        {orbMemo}
        <MainLayout>
          <Navigation active={active} setActive={setActive} />
          <main>{displayData()}</main>
        </MainLayout>
      </main>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #fff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    /* overflow: hidden; */
    &::-webkit-scrollbar {
      width: 0;
    }
  }

  /* breakpoints */
  /* @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
  } */
`;

export default App;
