import React from "react";
import { Snippet } from "../types/snippet";
import { useNavigate } from "react-router-dom";
import unpin from "../assets/unpin.svg";
import pin from "../assets/pin.svg";

interface Props {
  snippet: Snippet;
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
  togglePin: (id: string) => void;
}

export default function SnippetCard({
  snippet,
  setSnippets,
  togglePin,
}: Props) {
  const navigate = useNavigate();

  const handleDelete = () => {
    setSnippets((prev) => prev.filter((e) => e.id !== snippet.id));
  };

  return (
    <div className="snippetcard w-[25vw] h-60 flex flex-col items-start p-3 bg-white rounded-md relative">
      <div
        className="title text-gray800 font-semibold font-montserrat text-2xl mb-1 hover:cursor-pointer hover:text-indigo500"
        onClick={() => navigate(`/snippet/${snippet.id}`)}
      >
        {snippet.title ? snippet.title : "Title"}
      </div>
      <div
        className="delete absolute top-1 right-1 text-xl px-2 py-1 hover:cursor-pointer hover:bg-red-400"
        onClick={handleDelete}
      >
        X
      </div>
      <img
        className="pin-unpin absolute top-[10.3px] right-8 w-6"
        onClick={() => togglePin(snippet.id)}
        src={snippet.pinned ? pin : unpin}
      />
      <div className="category text-gray500 mb-2">
        Category : {snippet.category ? snippet.category : ""}
      </div>
      
      <div className="content text-lg font-mono w-[95%] h-[70%] overflow-y-hidden text-start mb-2">
        {snippet.content ? snippet.content.slice(0, 99) : ""}...
      </div>
      <div className="tags text-gray500">
        Tags : {snippet.tags ? snippet.tags : ""}
      </div>
    </div>
  );
}
