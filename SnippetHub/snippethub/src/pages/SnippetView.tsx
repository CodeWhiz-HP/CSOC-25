import React, {useState} from "react";
import { Snippet } from '../types/snippet';
import { useParams , useNavigate } from "react-router-dom";

interface Props {
      snippets: Snippet[];
      setSnippets: React.Dispatch<React.SetStateAction<Snippet[]>>;
}


export default function SnippetView({snippets} : Props) {

    const { id } = useParams();
    const snippet = snippets.find((e) => e.id === id );
    const navigate = useNavigate();

    if(!snippet) return <div className="h-[90vh] w-[90vw] ml-[10vw] mt-[10vh] text-3xl">Snippet not found !</div>


    return(
        <div className="fullpage h-[90vh] w-[95vw] ml-[2vw] mt-[5vh] p-8 bg-white relative font-montserrat rounded-lg text-gray800">
            <div className="s-title w-fit text-4xl text-indigo500 font-CalSans mb-4">{snippet.title ? snippet.title : "Title"}</div><hr className="border-red-400 border-dashed border-[1.5px] mb-4" />
            <div className="close-btn absolute top-1 right-2 rounded-lg p-2 hover:bg-red-400 hover:cursor-pointer" onClick={() => navigate(-1)}>← Back</div>
            <div className="s-category text-start text-xl text-amber500 mb-4">Category : {snippet.category ? snippet.category : ""}</div>
            {snippet.fileName && (
        <div>
          <p>{snippet.fileName}</p>
          {snippet.fileUrl?.startsWith("data:image") && (
            <img src={snippet.fileUrl} alt={snippet.fileName} />
          )}
          {snippet.fileUrl && !snippet.fileUrl.startsWith("data:text") && (
            <iframe
              src={snippet.fileUrl}
              title="File preview"
              className="w-full h-32 border mt-1 rounded"
            />
          )}
        </div>
      )}
            <div className="content whitespace-pre-wrap text-start text-xl mb-4">{snippet.content ? snippet.content : ""}</div>
            <div className="tags text-start text-xl mb-4 text-gray-600">Tags : {snippet.tags ? snippet.tags : ""}</div>
        </div>
    );
}