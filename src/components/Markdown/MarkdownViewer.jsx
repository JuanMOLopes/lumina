import { useEffect, useState } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";
import html2pdf from "html2pdf.js";
import "./MarkdownViewer.css";

function MarkdownViewer({ markdown, filename = "conteudo.pdf" }) {
  const [html, setHtml] = useState("");

  useEffect(() => {
    const rawHtml = marked.parse(markdown || "");
    const clean = DOMPurify.sanitize(rawHtml);
    setHtml(clean);
  }, [markdown]);

  function gerarPDF() {
    const element = document.getElementById("conteudo-markdown");
    const options = {
      margin: 10,
      filename,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };
    html2pdf().from(element).set(options).save();
  }

  return (
    <div className="markdown-viewer-wrapper">
      <div
        id="conteudo-markdown"
        className="conteudo-markdown"
        dangerouslySetInnerHTML={{ __html: html }}
      />
      <div className="acoes">
        <button onClick={gerarPDF}>Baixar PDF</button>
      </div>
    </div>
  );
}

export default MarkdownViewer;
