import { useState } from "react";
// UseState: Serve para armazenar e gerenciar estado local de um componente.
import { GoogleGenAI } from "@google/genai";
import html2pdf from "html2pdf.js";

import "../App.css";

import Header from "../components/Header/Header";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

function Home() {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serie, setSerie] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [tempoAula, setTempoAula] = useState("50 minutos");
  const [nivelDificuldade, setNivelDificuldade] = useState("");
  const [observacoes, setObservacoes] = useState("");

  const apiKey = import.meta.env.VITE_IA_API_KEY;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");

    if (!apiKey) {
      setError("A chave da API não foi configurada.");
      setLoading(false);
      return;
    }

    const ai = new GoogleGenAI({
      apiKey: apiKey,
    });

    try {
      const textoGerado = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `
      **PERSONA E OBJETIVO:**
      Você é a "Lumina", uma assistente de IA educacional (use pronomes femininos) especializada em Física para o Ensino Médio. Seu propósito é auxiliar professores a planejar aulas de forma objetiva e estruturada, economizando tempo e oferecendo sugestões pedagógicas claras. Você não substitui o professor, mas atua como uma ferramenta de apoio para o planejamento didático.

      - Seja concisa e direta, considerando o tempo limitado da aula.
      - Sugira de 2 a 4 exercícios compatíveis com a carga horária.
      - Priorize exemplos práticos e visuais sempre que possível.

      **REGRAS E ESCOPO:**
      1.  **Foco Exclusivo:** Responda *apenas* a solicitações relacionadas à disciplina de Física para o 1º, 2º e 3º ano do Ensino Médio. Se o pedido for de outra matéria, recuse educadamente, informando que sua especialidade é Física.
      2.  **Estrutura da Resposta:** Sempre gere o planejamento de aula seguindo estritamente esta estrutura, nesta ordem:
          - **Tema da Aula:**
          - **Objetivo da Aula:** (O que o aluno deve ser capaz de fazer ao final da aula)
          - **Estrutura da Aula:** (Um roteiro com etapas e sugestão de divisão de tempo)
          - **Tópicos para Slides:** (Pontos-chave para a apresentação visual)
          - **Sugestões de Exercícios:** (Problemas ou questões para fixação)
      3.  **Adaptação:** Adapte a linguagem, a complexidade do conteúdo e o tipo de exercício à série (1º, 2º ou 3º ano), ao nível de dificuldade e às observações pedagógicas fornecidas.
      4.  **Fora do Escopo:** Não crie slides, não corrija exercícios e não gerencie informações de alunos.

      **ENTRADAS DO PROFESSOR PARA ANÁLISE:**
      A seguir, estão as informações fornecidas pelo professor para a criação do plano de aula. Use-as como base para sua resposta.

      - **Série:** ${serie}
      - **Conteúdo:** ${conteudo}
      - **Tempo de Aula:** ${tempoAula}
      - **Nível de Dificuldade:** ${nivelDificuldade}
      - **Observações:** ${observacoes}

      Com base em todas as diretrizes e nas informações fornecidas, elabore a sugestão de plano de aula.

      *IMPORTANTE:*
        - Responda EXCLUSIVAMENTE em formato HTML, com css embutido (a estilização deve ser simples, mas moderna para PDF, use classes bem específicas para evitar conflitos com minha página, não coloque nenhum background, use apenas as cores branco e preto (#fff e #000), procure ser semelhante ao markdown (assim como o notion)).
        - Mantenha a estrutura solicitada.
        - Não escreva texto fora do HTML.
        - Não use explicações, comentários ou introduções.
        - Use títulos e listas quando apropriado.
        - Mantenha exatamente a estrutura solicitada.
        - Se possível e dentro do contexto, utilize tabelas para organizar informações.
        - Se possível, utilize negrito e itálico para destacar pontos importantes.
      `,
      });
      setResponse(textoGerado.text);
    } catch (err) {
      setError("Ocorreu um erro ao gerar o conteúdo. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  function gerarPDF() {
    const options = {
      margin: 10,
      filename: `Plano_de_aula_${conteudo}_${serie}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().from(response).set(options).save();
  }

  return (
    <div className="homepage">
      <Navbar />

      <div className="conteudo">
        <Header titulo="Seja bem-vindo à lumina!" />

        {!response && (
          <p className="explicacao">
            Olá, eu sou a Lumina, sua assistente de IA educacional especializada
            em Física para o Ensino Médio. Estou aqui para ajudar você a
            planejar suas aulas de forma rápida e eficiente. Basta preencher o
            formulário com as informações da sua aula, e eu criarei um plano de
            aula estruturado para você. Vamos começar?
          </p>
        )}

        {response && (
          <div className="resultado">
            <div dangerouslySetInnerHTML={{ __html: response }} />

            <button onClick={gerarPDF}>Baixar Plano de Aula em PDF</button>
          </div>
        )}

        {error && <p className="erro">{error}</p>}

        <form className="formulario" onSubmit={handleSubmit}>
          <div className="lado-a-lado">
            <label>
              Série:
              <select
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
                required
              >
                <option value="">Selecione a série</option>
                <option value="1º ano do Ensino Médio">
                  1º ano do Ensino Médio
                </option>
                <option value="2º ano do Ensino Médio">
                  2º ano do Ensino Médio
                </option>
                <option value="3º ano do Ensino Médio">
                  3º ano do Ensino Médio
                </option>
              </select>
            </label>
            <label>
              Conteúdo:
              <input
                type="text"
                value={conteudo}
                onChange={(e) => setConteudo(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="lado-a-lado">
            <label>
              Tempo de Aula:
              <input
                type="text"
                value={tempoAula}
                onChange={(e) => setTempoAula(e.target.value)}
                required
              />
            </label>
            <label>
              Nível de Dificuldade:
              <select
                value={nivelDificuldade}
                onChange={(e) => setNivelDificuldade(e.target.value)}
                required
              >
                <option value="">
                  Selecione o nível de dificuldade da turma
                </option>
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </label>
          </div>
          <label>
            Observações (opcional):
            <textarea
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            />
          </label>
          <button type="submit" disabled={loading}>
            {loading ? "Gerando plano de aula..." : "Gerar Plano de Aula"}
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
