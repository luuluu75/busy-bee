import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { COLORS } from "../../utils/css/Constants";
import { format } from "date-fns";

const DateSection = ({ today }) => {
    let history = useHistory();

    const nextDay = () => {
        let nextDay = new Date();
        nextDay.setDate(today.getDate() + 1);
        let nextDayString = format(nextDay, "y-MM-dd");
        history.push(`/date/${nextDayString}`);
    };
    const previousDay = () => {
        let nextDay = new Date();
        nextDay.setDate(today.getDate() - 1);
        let nextDayString = format(nextDay, "y-MM-dd");
        history.push(`/date/${nextDayString}`);
    };
    return (
        <Header>
            <DateDivSection>
                <Arrow onClick={(ev) => previousDay()}>{"‹"}</Arrow>
                <DateNumber>{format(today, "dd")}</DateNumber>
                <DateRightSection>
                    <div className="right">{format(today, "MMMM")}</div>
                    <div className="right">{format(today, "Y")}</div>
                </DateRightSection>
                <Arrow onClick={(ev) => nextDay()}>{"›"}</Arrow>
            </DateDivSection>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            </svg>
        </Header>
    );
};

const Header = styled.div`
  position: relative;
`;

const DateDivSection = styled.div`
  color: ${COLORS.text2};
  display: flex;
  flex-direction: row;
  background: ${COLORS.gradientCalm};
  justify-content: center;
  padding-top: 20px;
`;
const Arrow = styled.button`
  color: white;
  font-size: 3rem;
  padding: 0 30px;
  background-color: transparent;
  border: none;
  outline: none;
  &:active {
    outline: none;
  }
`;
const DateNumber = styled.div`
  color: ${COLORS.text2};
  font-size: 5rem;
  font-weight: 300;
  padding: 0 20px;
  border-right: solid 1px white;
  box-sizing: border-box;
  line-height: 4rem;
`;
const DateRightSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 0 20px;
  .right {
    color: ${COLORS.text2};
  }
`;
export default DateSection;