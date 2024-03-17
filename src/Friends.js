import Button from "./button";
export default function Friends({
  friends,
  onClickingSelect,
  onClickingClose,
  selectedFriend,
}) {
  return (
    <ul>
      {friends.map((el) => (
        <FriendsList
          friendObj={el}
          key={el.id}
          selectedFriend={selectedFriend}
          onClickingSelect={onClickingSelect}
          onClickingClose={onClickingClose}
        />
      ))}
    </ul>
  );
}

function FriendsList({
  friendObj,
  onClickingSelect,
  onClickingClose,
  selectedFriend,
}) {
  let isSelected = selectedFriend.id === friendObj.id;

  function handleSelectButton(friends) {
    console.log(friends.id);
    onClickingSelect(friends);
  }

  function handleCloseButton() {
    onClickingClose();
  }

  return (
    <div>
      <li className={isSelected ? "selected" : ""}>
        <img src={friendObj.image} alt={friendObj.name} />
        <span>{friendObj.name}</span>
        {friendObj.balance < 0 ? (
          <p className="red">
            You own {friendObj.name} {Math.abs(friendObj.balance)}€
          </p>
        ) : friendObj.balance > 0 ? (
          <p className="green">
            {friendObj.name} ownes you {Math.abs(friendObj.balance)}€{" "}
          </p>
        ) : (
          <p>You and {friendObj.name} is settled.</p>
        )}
        {isSelected ? (
          <Button onCLick={() => handleCloseButton(friendObj)}> Close</Button>
        ) : (
          <Button onCLick={() => handleSelectButton(friendObj)}> Select</Button>
        )}
      </li>
    </div>
  );
}
