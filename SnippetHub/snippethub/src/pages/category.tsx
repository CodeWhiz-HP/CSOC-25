import Sidebar from "../components/sidebar";
import { Snippet } from "../types/snippet";
import SnippetCard from "../components/SnippetCard";
import { useParams } from "react-router-dom";
import React from "react";

interface Props {
  snippets: Snippet[];
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
  togglePin: (id: string) => void;
}

export default function CategoryPage({ snippets, setSnippets, togglePin}: Props) {
    const { name } = useParams<{ name: string }>();
    const filtered = snippets.filter(s => s.category === name);


  return (
    <div className="pinned flex">
      <Sidebar />
      <div className="main-content ml-4 mt-3 w-[82vw]">
        <div className="header w-full flex gap-[8vw] justify-start items-baseline font-montserrat">
          <h2 className="text-2xl font-bold mb-4">
        Snippets in category: <span className="text-indigo500">{name}</span>
      </h2>
        </div>
        <div className="snippets-container">
          <div className="grid gap-x-1 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
            <SnippetCard key={s.id}
  snippet={s}
  setSnippets={setSnippets}
  togglePin={togglePin} />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
