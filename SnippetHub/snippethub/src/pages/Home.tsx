import Sidebar from "../components/sidebar";
import SnippetForm from "../components/SnippetForm";
import { Snippet } from "../types/snippet";
import SnippetCard from "../components/SnippetCard";
import React, { useState } from "react";

interface Props {
  snippets: Snippet [];
  setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
  togglePin: (id: string) => void;
  categories: string[];
}

export default function Home({ snippets, setSnippets , togglePin, categories}: Props) {
  return (
    <div className="home flex">
      <Sidebar />
      <div className="main-content ml-4 mt-3 w-[82vw]">
        <div className="addSnippet">
          <SnippetForm setSnippets={setSnippets} snippets={snippets} categories={categories}/>
        </div>
        <div className="snippetsSection w-full flex gap-[8vw] justify-start items-baseline font-montserrat">
          <div className="heading text-3xl font-montserrat ml-3">
            My Snippets
          </div>
        </div>
        <div className="snippets-container mt-5 ml-3">
          <div className="grid gap-x-1 gap-y-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {snippets.map((snippet) => (
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
