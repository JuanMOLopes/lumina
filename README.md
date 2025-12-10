# 📘 Lumina — Assistente Inteligente para Planejamento de Aulas de Física

![Status do Projeto](https://img.shields.io/badge/status-Finalizado-green)
![Licença](https://img.shields.io/badge/licen%C3%A7a-educacional-blue)

📌 Visão Geral

Lumina é uma aplicação web educacional que utiliza Inteligência Artificial Generativa (Google Gemini) para auxiliar professores do Ensino Médio no planejamento objetivo e estruturado de aulas de Física.

O sistema foi projetado para atender professores que atuam no 1º, 2º e 3º anos do Ensino Médio, respeitando as limitações de tempo de aula, nível cognitivo dos alunos e complexidade dos conteúdos, oferecendo sugestões pedagógicas claras e aplicáveis para o dia a dia em sala.

Este projeto é desenvolvido como parte do curso técnico em Desenvolvimento de Sistemas (SENAI).

🎯 Objetivo do Projeto

- **Auxiliar** professores no planejamento de aulas de Física;
- **Reduzir** o tempo gasto na preparação de conteúdos didáticos;
- **Gerar** sugestões de aulas e exercícios de acordo com a série atendida;
- **Aplicar** Inteligência Artificial de forma ética, controlada e educacional;
- **Consolidar** conhecimentos técnicos dos alunos desenvolvedores em um projeto real.

---

## 📚 Escopo do Projeto

| ✅ Dentro do Escopo                                                                                                                                                           | ❌ Fora do Escopo                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| Planejamento exclusivo para a disciplina de **Física** do Ensino Médio.                                                                                                       | Criação automática de slides.                               |
| Atendimento aos **1º, 2º e 3º anos**.                                                                                                                                         | Correção automática de exercícios.                          |
| Seleção da série e do conteúdo pelo professor.                                                                                                                                | Suporte a outras disciplinas além de Física.                |
| Geração de: Tema, Objetivo, Estrutura da aula, Tópicos para slides e Exercícios.                                                                                              | Cadastro de alunos ou avaliações.                           |
| Interface web **simples e intuitiva**.                                                                                                                                        | Uso em ambientes fora do contexto educacional.              |
| Exportação do planejamento em **PDF**.                                                                                                                                        |                                                             |
| Tema **claro e escuro**.                                                                                                                                                      |                                                             |
| Publicação do projeto em **ambiente web**.                                                                                                                                    |                                                             |

> Funcionalidades adicionais poderão ser consideradas apenas como versões futuras após a entrega oficial ao SENAI.

---

🧠 Como a IA Funciona

A Inteligência Artificial utiliza a **API Gemini**, recebendo informações fornecidas pelo professor, como:

- **Série** (1º, 2º ou 3º ano);
- **Conteúdo** da aula;
- **Carga horária** disponível;
- **Dificuldade** percebida;
- **Observações** pedagógicas adicionais (opcional).

Com base nesses dados, a IA gera um planejamento coerente, objetivo e adequado à série, respeitando:

- Linguagem apropriada;
- Complexidade progressiva;
- Tipos de exercícios compatíveis com a turma.

---

## 🖥️ Funcionalidades Principais

- ✅ Seleção da série do Ensino Médio;
- ✅ Inserção do conteúdo da aula;
- ✅ Campo de interação direta com a IA;
- ✅ Exibição clara das respostas da IA;
- ✅ Copiar conteúdo gerado;
- ✅ Ajustar ou reformular o planejamento;
- ✅ Exportar planejamento em PDF;
- ✅ Interface responsiva;
- ✅ Modo claro e modo escuro.

---

## ⚙️ Tecnologias Utilizadas

| Categoria           | Tecnologias                               |
| ------------------- | ----------------------------------------- |
| **Frontend**        | `React`, `TypeScript`, `CSS / Tailwind`   |
| **Backend/Serviços**| `Node.js`, `API Google Gemini`            |
| **Infraestrutura**  | `Vercel`, `Variáveis de ambiente (.env)`  |

---

## 🔒 Segurança e Boas Práticas

- A chave da API Gemini é armazenada em **variáveis de ambiente**;
- **Sanitização de prompts** para evitar uso indevido da IA;
- Restrições explícitas para respostas fora do escopo da disciplina;
- Tratamento de erros amigável ao usuário.

---

## 🧪 Qualidade e Usabilidade

- Interface **simples e objetiva**;
- Processo de uso em poucos passos;
- **Feedback visual** claro;
- Tempo de resposta otimizado;
- Design inspirado em dashboards e ferramentas modernas de IA.

---

## 👨‍🏫 Público-Alvo

- Professores de Física do Ensino Médio;
- Instituições de ensino (SESI / SENAI);
- Docentes com carga horária reduzida de planejamento.

---

## 👩‍💻 Desenvolvedores

Projeto desenvolvido por estudantes do curso técnico em Desenvolvimento de Sistemas — SENAI:

- Agatha A. França
- Ana Beatriz F. Pereira
- Juan M. de O. Lopes
- Lucas A. P. Marin
- Zayra A. França

**Professor Tutor:** Rafael do Nascimento Sorensen

---

## 🚀 Status do Projeto

> 📌 **Em desenvolvimento** — versão MVP.

## 📄 Licença

Este projeto possui fins educacionais e acadêmicos, sem fins comerciais.

---

✅ Considerações Finais

O Lumina nasce como uma solução simples, objetiva e eficiente para apoiar professores no desafio diário de planejar aulas de Física, integrando tecnologia, educação e Inteligência Artificial de forma responsável.
