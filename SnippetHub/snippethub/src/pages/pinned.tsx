import Sidebar from "../components/sidebar";
import { Snippet } from "../types/snippet";
import SnippetCard from "../components/SnippetCard";
import React from "react";

interface Props {
  snippets: Snippet[];
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
  togglePin: (id: string) => void;
}

export default function Pinned({ snippets, setSnippets, togglePin }: Props) {
  return (
    <div className="pinned flex">
      <Sidebar />
      <div className="main-content ml-4 mt-3 w-[82vw]">
        <div className="header w-full flex gap-[8vw] justify-start items-baseline font-montserrat">
          <div className="heading text-3xl font-montserrat mb-4">
            Pinned/Favourites
          </div>
        </div>
        <div className="snippets-container">
          <div className="grid gap-x-1 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {snippets
            .filter((snippet) => snippet.pinned)
            .map((snippet) => (
              <SnippetCard
                key={snippet.id}
                snippet={snippet}
                setSnippets={setSnippets}
                togglePin={togglePin}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
