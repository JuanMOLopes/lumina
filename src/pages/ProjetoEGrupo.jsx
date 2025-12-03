import "../App.css";
import Header from "../components/Header/Header";
import Nav from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import GrupoImg from "/GrupoRetrato.png";
import TextoDireita from "../components/TextoDir/TextoDir";
import TextoEsquerda from "../components/TextoEsq/TextoEsq";

function ProjetoEGrupo() {
  return (
    <>
      <Header/>
     

      <div className="Container-projeto">
        <p>
         Nosso projeto visa desenvolver uma aplicação web completa (Full Stack) que utiliza a API
          de IA Generativa Gemini para auxiliar o professor tutor do SESI no planejamento de aulas, 
          sugerindo apresentações e exercícios alinhados à sua Unidade Curricular. A aplicação foi 
          construída utilizando uma stack Full Stack com React (Vite) no Front-End, Node.  O projeto reúne
           conteúdos das Unidades Curriculares de Levantamento de Requisitos, Lógica de Programação, 
           Programação Front-End, Programação Back-End, Arquitetura de Redes e Gerenciamento de Projetos,
            seguindo a metodologia SCRUM e a abordagem MSEP.

        </p>
      </div>

       <img className="Grupo" src={GrupoImg} alt="Grupo 2" />


       <div className="Container-grp2">
        <p> 
          Nós do grupo 2 escrevemos esta mensagem como forma de agradecimento aos professores Rafael,
           Antônio e Leandro por esta atividade que foi proposta. Durante o processo de criação do site, 
           diversos pontos do grupo foram melhorados, tendo como mais importante o trabalho em equipe. 
           Essa atividade foi de grande importância para nossa aprendizagem e estudo de conteúdos de 
           desenvolvimento de sistemas.
            O grupo 2 reitera sua gratidão pelo trabalho de conclusão proposto pelos profissionais do ensino,
             em prol de obtermos conhecimento. Gratos!

        </p>
       </div>

      <div className="secao-texto">

       <TextoDireita
          titulo="Feito por: Grupo 2"
          texto=" Em conjunto o grupo 2 realizou a entrevista inicial 
          com o professor, validações do projeto (escopo e versão final), 
          definição de requisitos e fotos dos integrantes. "
          imagem="/foto-grupoConjunto.png"
        />


        <TextoEsquerda
          titulo="Feito por: Agatha"
          texto="Desenvolvimento do WireFrame, 
          histórias de usuário e backlog, relatório SCRUM,
           formulação de textos para o site, elaboração de componentes e produção de página."
          imagem="/foto-agatha.png"
        />
        <TextoDireita
          titulo="Feito por: Ana"
          texto="Casos de teste e definição de requisitos"
          imagem="/foto-ana.png"
        />

        <TextoEsquerda
          titulo="Feito por: Juan"
          texto="Ata de reunião, estilização geral do site, desenvolvimento de componentes, 
          desenvolvimento do prompt, produção de página, definição da arquitetura do sistema
           e publicação do projeto. 
"
          imagem="/foto-juan.png"
        />
        <TextoDireita
          titulo="Feito por: Lucas"
          texto=" Histórias de usuário e backlog, testes de prompt, desenvolvimento 
          de componentes e desenvolvimento de página.
"
          imagem="/foto-lucas.png"
        />

        <TextoEsquerda
          titulo="Feito por: Zayra"
          texto="Ata de reunião, relatório SCRUM, estilização geral do site,
           desenvolvimento de componentes, desenvolvimento do prompt,
            formulação de textos para o site.
"
          imagem="/foto-zayra.png"
        />
      </div>
      <Footer />
    </>
  );
}
export default ProjetoEGrupo;
