import React from "react";
import { styled } from "styled-components";
import { useGlobalContext } from "../../context/GlobalContext";
import { transactions } from "../../utils/Icons";
import IncomeItem from "../IncomeItem/IncomeItem";

function Transactions() {
  const { incomes, expenses, transactionHistory } = useGlobalContext();
  const { ...history } = transactionHistory();
  return (
    <TransactionStyled>
      <div className="income-trans">
        <h2 className="title">Income Transaction History</h2>
        <div className="trans-history">
          {incomes.map((item) => {
            const { _id, title, amount, category, description, date, type } =
              item;
            return (
              <div className="info">
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor={"#42AD00"}
                  //   deleteItem={deleteExpense}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="expense-trans">
        <h2 className="title">Expense Transaction History</h2>
        <div className="trans-history">
          {expenses.map((item) => {
            const { _id, title, amount, category, description, date, type } =
              item;
            return (
              <div className="info">
                <IncomeItem
                  key={_id}
                  id={_id}
                  title={title}
                  description={description}
                  amount={amount}
                  date={date}
                  category={category}
                  indicatorColor={"#42AD00"}
                  //   deleteItem={deleteExpense}
                  type={type}
                />
              </div>
            );
          })}
        </div>
      </div>
    </TransactionStyled>
  );
}

const TransactionStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem 8rem;
  overflow: hidden;

  .income-trans,
  .expense-trans {
    margin-top: 2.5rem;
  }
  .title {
    margin-bottom: 2 rem;
  }
  .trans-history {
    margin-top: 10px;
    /* overflow: scroll; */
  }

  /* Breakpoints */
  @media (max-width: 720px) {
    flex-direction: column;
    margin: 0.5rem;

    .income-trans,
    .expense-trans {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-top: 2.5rem;
      .title {
        text-align: center;
      }
    }

    .trans-history {
      display: flex;
      flex-direction: column;
      padding-right: 1.5rem;
      padding-left: 1.5rem;
      width: 100%;
      height: 300px;
      margin-top: 0.5rem;
      overflow: scroll;
    }
  }
`;

export default Transactions;
