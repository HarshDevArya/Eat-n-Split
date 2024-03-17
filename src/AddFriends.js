import { useState } from "react";
import Button from "./button";

export default function AddFriends({ friends, onAdingFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  function handleSubmitAddFreind(e) {
    if (!name || !image) return;
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFreind = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAdingFriend(newFreind);
    setName("");
    setImage("https://i.pravatar.cc/48");
    console.log(newFreind);
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmitAddFreind}>
      <lable htmlFor="friendName">🧑‍🤝‍🧑Friend Name</lable>
      <input
        id="friendName"
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <lable htmlFor="ImageURL">🖼️ Image URL</lable>
      <input
        id="ImageURL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        type="text"
      />
      <Button>Add</Button>
    </form>
  );
}
