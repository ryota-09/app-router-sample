"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [inputText, setInputText] = useState("")
  const router = useRouter();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      <h1>Search component</h1>
      <form>
        <label htmlFor="text">テキスト入力</label>
        <input
          onChange={(event) => setInputText(event.target.value)}
          placeholder="テキストを入力してください。"
          type="text"
          value={inputText}
        />
        <button onClick={(e) => handleSubmit(e)}>router push</button>
      </form>
      <small>client component. node runtime.</small>
    </>
  );
}
