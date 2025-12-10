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

  // Submissão do Formulário
  //handleSumit: função que processa o envio do formulário
  const handleSubmit = async (e) => {   // 'async' permite usar 'await' dentro da função
    e.preventDefault(); // Previne o recarregamento da página ao submeter o formulário
    setLoading(true);    // Inicia o estado de carregamento
    setError(null);   // Limpa erros anteriores
    setResponse("");     // Limpa respostas anteriores para gerar uma nova


    //Validação Chave API
    if (!apiKey) {     //se não houver chave de API configurada
      setError("A chave da API não foi configurada.");
      //define mensagem de erro
      setLoading(false);
      //para o carregamento
      return;
    }

    //Iniciação do cliente
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      // Passa a chave da API para autenticar
    });

    try {
      // Tenta executar o bloco de código

      const textoGerado = await ai.models.generateContent({
      // Aguarda a resposta da API e armazena em 'textoGerado'

      model: "gemini-2.5-flash",
      // Usa o modelo Gemini 2.5 Flash (rápido e eficiente)

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
        - Responda EXCLUSIVAMENTE em formato HTML, com css embutido (a estilização deve ser simples, mas moderna para PDF, use classes bem específicas para evitar conflitos com minha página, o background deve obrigatoriamente ser transparent, use apenas as cores branco e preto (#fff e #000), procure ser semelhante ao markdown (assim como o notion)).
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
       // Armazena a resposta gerada no estado

    } catch (err) {       // Se algo der errado durante a requisição

      setError("Ocorreu um erro ao gerar o conteúdo. Tente novamente.");
      // Define mensagem de erro
      console.error(err);
      // Exibe o erro completo no console (para debug)
    } finally {
      setLoading(false);
      // Para o indicador de carregamento
    }
  };

  //Gerar PDF
  function gerarPDF() {
    const options = {   // Configurações do PDF
      margin: 10,
      filename: `Plano_de_aula_${conteudo}_${serie}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      // Define: unidade em milímetros, tamanho A4, orientação retrato

    };

    html2pdf().from(response).set(options).save();
    //Inicia a conversão. Pega o HTML do estado 'response'. Aplica as configurações.Baixa o arquivo PDF no computado
  }

  return (
    <div className="homepage">
      <Navbar />

      <div className="conteudo">
        <Header titulo="Seja bem-vindo à lumina!" />

        {!response && (   // Se NÃO há resposta, mostra:
          <p className="explicacao">
            Olá, eu sou a Lumina, sua assistente de IA educacional especializada
            em Física para o Ensino Médio. Estou aqui para ajudar você a
            planejar suas aulas de forma rápida e eficiente. Basta preencher o
            formulário com as informações da sua aula, e eu criarei um plano de
            aula estruturado para você. Vamos começar?
          </p>
        )}

        <form className="formulario" onSubmit={handleSubmit}>
         {/* Formulário que chama handleSubmit ao submeter */}

          <div className="lado-a-lado">
            <label>
              Série:
              <select
                value={serie}
                // O valor selecionado é controlado pelo estado 'serie'
                onChange={(e) => setSerie(e.target.value)}
                // Ao mudar, atualiza o estado com o novo valor
                required
              >
                <option value="">Selecione a série</option>
                {/* Opção padrão vazia */}
                <option value="1º ano do Ensino Médio">
                  1º ano do Ensino Médio
                </option>
                <option value="2º ano do Ensino Médio">
                  2º ano do Ensino Médio
                </option>
                <option value="3º ano do Ensino Médio">
                  3º ano do Ensino Médio
                </option>
                {/* Três opções de série */}
              </select>
            </label>
            <label>
              Conteúdo:
              <input
                type="text"
                value={conteudo}
                // Valor controlado pelo estado 'conteudo'
                onChange={(e) => setConteudo(e.target.value)}
                // Atualiza o estado ao digitar
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
                 // Valor padrão: "50 minutos"
                onChange={(e) => setTempoAula(e.target.value)}
                required
              />
            </label>
            <label>
              Nível de Dificuldade:
              <select
                value={nivelDificuldade}
                
                onChange={(e) => setNivelDificuldade(e.target.value)}
                /* Atualiza o estado quando o usuário seleciona outra opção */
                required
              >
                <option value="">
                   {/* Opção padrão vazia para forçar escolha explícita */}
                  Selecione o nível de dificuldade da turma
                </option>
                <option value="Básico">Básico</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </label>
          </div>
          <label>
            {/* Campo opcional de observações */}
            Observações (opcional):
            <textarea
              value={observacoes}
              /* Campo controlado: mostra o valor do estado `observacoes` */
              onChange={(e) => setObservacoes(e.target.value)}
               
            />
          </label>
          {/* Botão de submissão do formulário */}
          <button type="submit" disabled={loading}>    
            {/* disabled evita envios duplicados enquanto `loading` for true */}
       {loading ? "Gerando plano de aula... 👇" : "Gerar Plano de Aula"}
         {/* Texto dinâmico: indica processamento ou ação disponível */}
          </button>
        </form>
        
          {response && (
          //Se tiver resposta:
        
          <div className="resultado">
            <div dangerouslySetInnerHTML={{ __html: response }} />
            {/* Renderiza o HTML gerado pela IA (CUIDADO: pode ser perigoso se vir de fonte não confiável) */}

            <button onClick={gerarPDF}>Baixar Plano de Aula em PDF</button>
           {/* Botão que chama a função gerarPDF() */}
          
          </div>
        )}

        {error && <p className="erro">{error}</p>}
        {/* Se há erro, exibe a mensagem */}
      </div>

      <Footer />
    </div>
  );
}

export default Home;
