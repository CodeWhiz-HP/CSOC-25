import React, { useEffect } from 'react';
import './App.css';
import './input.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Pinned from "./pages/pinned";
import { Snippet } from "./types/snippet";
import {saveSnippets} from "./storage"
import { loadSnippets } from "./storage";
import SnippetView from './pages/SnippetView';
import CategoryPage from './pages/category';



function App() {
  const [snippets, setSnippets] = useState<Snippet[]>(() => {
    const savedSnippets = loadSnippets();
    return savedSnippets.length > 0 ? savedSnippets : [];
  });

  const [categories, setCategories] = useState<string[]>(() => {
  const saved = localStorage.getItem("categories");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("categories", JSON.stringify(categories));
}, [categories]);


  
  useEffect(() => {
  console.log("Snippets changed, saving...", snippets);
  saveSnippets(snippets);
}, [snippets]);

  const handletogglePin = (id: string) => {
    setSnippets((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, pinned: !e.pinned } : e
      )
    );
  };




  return (
    <div className="App bg-slate-300 h-screen " id="root">
      <Router>
        <Routes>
          <Route path="/" element={<Home categories={categories} snippets={snippets} setSnippets={setSnippets} togglePin={handletogglePin}/>} />
          <Route path="/pinned" element={<Pinned togglePin={handletogglePin} snippets={snippets} setSnippets={setSnippets} />} />
          <Route path="/snippet/:id" element={<SnippetView snippets={snippets} setSnippets={setSnippets} />} />
          <Route path="/category/:name" element={<CategoryPage snippets={snippets} setSnippets={setSnippets} togglePin={handletogglePin} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
