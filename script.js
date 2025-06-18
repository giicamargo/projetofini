document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do DOM
    const btnDisciplinas = document.getElementById('btnDisciplinas');
    const dropdownDisciplinas = document.getElementById('dropdownDisciplinas');
    const cardsContainer = document.getElementById('cardsContainer');
    const disciplinaLinks = dropdownDisciplinas.querySelectorAll('a');

    // Dados de exemplo das notas dos alunos para cada disciplina
    // Cada item agora inclui uma 'explicacao' detalhada
    const notasDisciplinas = {
        matematica: [
            { tipo: 'Relatórios de conteudos e pesquisas realizadas', nota: 8.5, explicacao: 'análise de gráficos e funções; álgebra, teoria dos números, geometria e aritmética.' },
            { tipo: 'Prova 1º Semestre', nota: 7.0, explicacao: 'Avaliação teórica abrangendo os tópicos de Álgebra e Geometria do primeiro semestre.' },
            { tipo: 'Atividade em Grupo', nota: 9.2, explicacao: 'Resolução de problemas complexos em equipe, focando em lógica e raciocínio.' },
            { tipo: 'Trabalhos', nota: 8.0, explicacao: 'Projeto individual de aplicação de conceitos matemáticos em um problema real.' }
        ],
        fisica: [
            { tipo: 'Relatório Laboratório', nota: 9.0, explicacao: 'Relatório detalhado da experiência sobre Leis de Newton, com gráficos e conclusões.' },
            { tipo: 'Prova Bimestral', nota: 7.5, explicacao: 'Avaliação sobre Cinemática e Dinâmica, incluindo questões conceituais e problemas.' },
            { tipo: 'Atividade Prática', nota: 8.8, explicacao: 'Construção de um protótipo simples aplicando princípios de física mecânica.' },
            { tipo: 'Trabalhos', nota: 7.9, explicacao: 'Exame cumulativo cobrindo todos os tópicos do ano letivo.' }
        ],
        filosofia: [
            { tipo: 'Relatório', nota: 9.5, explicacao: 'Ensaio argumentativo sobre o existencialismo e suas implicações contemporâneas.' },
            { tipo: 'Provas', nota: 8.0, explicacao: 'Participação ativa e argumentação coerente no debate sobre ética e moral.' },
            { tipo: 'Atividades', nota: 7.8, explicacao: 'Avaliação sobre pensadores pré-socráticos e a filosofia clássica grega.' },
            { tipo: 'Trabalho', nota: 9.3, explicacao: 'Pesquisa aprofundada sobre a teoria do conhecimento de Immanuel Kant.' }
        ],
        sociologia: [
            { tipo: 'Atividades', nota: 8.7, explicacao: 'Levantamento de dados sobre desigualdade social na comunidade local.' },
            { tipo: 'Trabalho', nota: 9.1, explicacao: 'Apresentação em grupo sobre os desafios da globalização e seus impactos sociais.' },
            { tipo: 'Prova Conceitual', nota: 7.2, explicacao: 'Avaliação sobre os conceitos fundamentais de Durkheim, Weber e Marx.' },
            { tipo: 'Relatorio', nota: 8.5, explicacao: 'Análise crítica de um artigo científico sobre movimentos sociais no Brasil.' }
        ]
    };

    // Função para alternar a visibilidade do dropdown ao clicar no botão "Disciplinas"
    btnDisciplinas.addEventListener('click', (event) => {
        dropdownDisciplinas.style.display = dropdownDisciplinas.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); // Impede que o clique se propague para o document
    });

    // Fecha o dropdown se clicar fora dele
    document.addEventListener('click', (event) => {
        if (!btnDisciplinas.contains(event.target) && !dropdownDisciplinas.contains(event.target)) {
            dropdownDisciplinas.style.display = 'none';
        }
    });

    // Lidar com cliques nos links das disciplinas
    disciplinaLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que a página recarregue
            dropdownDisciplinas.style.display = 'none'; // Fecha o dropdown

            const disciplinaSelecionada = event.target.dataset.discipline;
            renderizarCards(disciplinaSelecionada);
        });
    });

    // Função para renderizar os cards de notas com suas explicações
    function renderizarCards(disciplina) {
        cardsContainer.innerHTML = ''; // Limpa os cards existentes

        const notas = notasDisciplinas[disciplina];

        if (notas && notas.length > 0) {
            notas.forEach(item => {
                const card = document.createElement('div');
                card.classList.add('card-nota');
                card.innerHTML = `
                    <h3>${item.tipo}</h3>
                    <p>Nota: <strong>${item.nota.toFixed(1)}</strong></p>
                    <div class="card-explicacao">
                        <p>${item.explicacao}</p>
                    </div>
                `;
                cardsContainer.appendChild(card);
            });
        } else {
            cardsContainer.innerHTML = `<p class="mensagem-inicial">Nenhuma nota encontrada para ${disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}.</p>`;
        }
    }
});