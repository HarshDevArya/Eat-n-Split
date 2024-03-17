import { useState } from "react";
import Button from "./button";
export default function Calculator({
  updateUI,
  setTotalMoney,
  setMySpend,
  mySpend,
  friendSpand,
  handleMyspend,
  totalMoney,
  handleSplitBill,
}) {
  const [billPaying, setbillPaying] = useState("user");
  function handleSubmit(e) {
    e.preventDefault();
    if (!totalMoney || !mySpend) return;
    handleSplitBill(billPaying === "user" ? friendSpand : -mySpend);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {updateUI.name}</h2>
      <label htmlFor="billvalue">💰Values</label>
      <input
        id="billvalue"
        value={totalMoney}
        type="number"
        onChange={(e) => setTotalMoney(Number(e.target.value))}
      />
      <label htmlFor="YourExpense">🧑‍🤝‍🧑 Your Expense</label>
      <input
        id="YourExpense"
        value={mySpend}
        onChange={(e) =>
          setMySpend(
            Number(e.target.value) > totalMoney
              ? mySpend
              : Number(e.target.value)
          )
        }
        type="number"
      />
      <label htmlFor="FriendExpense"> 🧑‍🤝‍🧑 {updateUI.name}'s Expense</label>
      <input
        id="FriendExpense"
        value={friendSpand}
        type="text"
        disabled="disabled"
      />
      <label>🤑 Who is Paying the bill?</label>
      <select
        value={billPaying}
        onChange={(e) => setbillPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{updateUI.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
