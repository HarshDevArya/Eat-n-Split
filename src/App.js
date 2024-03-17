import { useState } from "react";
import AddFriends from "./AddFriends";
import Calculator from "./Calculator";
import Friends from "./Friends";
import Button from "./button";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFreinds] = useState(initialFriends);
  const [showCalculator, setShowCalculator] = useState(false);
  const [updateUI, setupdateUI] = useState("");

  const [totalMoney, setTotalMoney] = useState("");
  const [mySpend, setMySpend] = useState("");
  // const [friendSpand, setFriendSpand] = useState("");
  const friendSpand = totalMoney ? totalMoney - mySpend : "";

  // function handleMyspend(e) {
  //   const newMySpend = e.target.value === "" ? "" : Number(e.target.value);
  //   setMySpend(newMySpend);
  //   if (totalMoney && newMySpend !== "") {
  //     // Ensure totalMoney has been entered
  //     const firendpanding = totalMoney - newMySpend;
  //     setFriendSpand(firendpanding);
  //   }
  // }
  function handleSplitBill(value) {
    console.log(value);
    setFreinds((friends) =>
      friends.map((friend) =>
        friend.id === updateUI.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  function handleAddFriendClick() {
    setShowAddFriend((show) => !show);
    setShowCalculator(false);
    setupdateUI("");
  }
  function onAdingFriend(friend) {
    setFreinds([...friends, friend]);
    setShowAddFriend(false);
  }
  function onClickingClose() {
    setShowCalculator(false);
    setupdateUI("");
    setTotalMoney("");
    setMySpend("");
    // setFriendSpand("");
  }
  function onClickingSelect(friendsObj) {
    console.log("Id in App", friendsObj.id);
    setShowCalculator(true);
    setupdateUI(friendsObj);
    setTotalMoney("");
    setMySpend("");
    // setFriendSpand("");
    setShowAddFriend(false);

    // setShowCalculator((showCalculator)=> !showCalculator);
  }
  // const friends = initialFriends;
  return (
    <div className="app">
      <div className="sidebar">
        <Friends
          friends={friends}
          selectedFriend={updateUI}
          onClickingSelect={onClickingSelect}
          onClickingClose={onClickingClose}
        />
        {showAddFriend && (
          <AddFriends friends={friends} onAdingFriend={onAdingFriend} />
        )}
        <Button onCLick={handleAddFriendClick}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {showCalculator && (
        <Calculator
          updateUI={updateUI}
          setTotalMoney={setTotalMoney}
          setMySpend={setMySpend}
          mySpend={mySpend}
          friendSpand={friendSpand}
          totalMoney={totalMoney}
          handleSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
