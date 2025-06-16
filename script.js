document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos do DOM
    const btnDisciplinas = document.getElementById('btnDisciplinas');
    const dropdownDisciplinas = document.getElementById('dropdownDisciplinas');
    const cardsContainer = document.getElementById('cardsContainer');
    const disciplinaLinks = dropdownDisciplinas.querySelectorAll('a');

    // Dados de exemplo das notas dos alunos para cada disciplina
    // Você pode expandir ou carregar isso de uma API real no futuro!
    const notasDisciplinas = {
        matematica: [
            { tipo: 'Provas', conteudo 1: 8,6,  conteudo 2: 9,2,  conteudo 3: 10 },
            { tipo: 'Atividades',  },
            { tipo: 'Atividade em Grupo', nota: 9.2 },
            { tipo: 'Trabalho Final', nota: 8.0 }
        ],
        fisica: [
            { tipo: 'Relatório Laboratório', nota: 9.0 },
            { tipo: 'Prova Bimestral', nota: 7.5 },
            { tipo: 'Atividade Prática', nota: 8.8 },
            { tipo: 'Exame Final', nota: 7.9 }
        ],
        filosofia: [
            { tipo: 'Ensaio Filosófico', nota: 9.5 },
            { tipo: 'Debate em Classe', nota: 8.0 },
            { tipo: 'Prova Escrita', nota: 7.8 },
            { tipo: 'Projeto de Pesquisa', nota: 9.3 }
        ],
        sociologia: [
            { tipo: 'Pesquisa de Campo', nota: 8.7 },
            { tipo: 'Seminário Apresentação', nota: 9.1 },
            { tipo: 'Prova Conceitual', nota: 7.2 },
            { tipo: 'Análise de Texto', nota: 8.5 }
        ]
    };

    // Função para alternar a visibilidade do dropdown ao clicar no botão "Disciplinas"
    btnDisciplinas.addEventListener('click', (event) => {
        // Alterna entre 'block' (visível) e 'none' (oculto)
        dropdownDisciplinas.style.display = dropdownDisciplinas.style.display === 'block' ? 'none' : 'block';
        event.stopPropagation(); // Impede que o clique se propague para o documento, evitando que o dropdown feche imediatamente
    });

    // Fecha o dropdown se o usuário clicar em qualquer lugar fora do botão ou do próprio dropdown
    document.addEventListener('click', (event) => {
        // Verifica se o clique não foi no botão e não foi dentro do dropdown
        if (!btnDisciplinas.contains(event.target) && !dropdownDisciplinas.contains(event.target)) {
            dropdownDisciplinas.style.display = 'none';
        }
    });

    // Adiciona um ouvinte de evento para cada link de disciplina no dropdown
    disciplinaLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link (que recarregaria a página)
            dropdownDisciplinas.style.display = 'none'; // Fecha o dropdown após a seleção

            // Pega o nome da disciplina do atributo 'data-discipline' do link
            const disciplinaSelecionada = event.target.dataset.discipline;
            // Chama a função para exibir os cards da disciplina selecionada
            renderizarCards(disciplinaSelecionada);
        });
    });

    // Função para criar e exibir os cards de notas na tela
    function renderizarCards(disciplina) {
        cardsContainer.innerHTML = ''; // Limpa qualquer card existente

        // Obtém as notas da disciplina selecionada do objeto 'notasDisciplinas'
        const notas = notasDisciplinas[disciplina];

        if (notas && notas.length > 0) {
            // Itera sobre cada item de nota e cria um card para ele
            notas.forEach(item => {
                const card = document.createElement('div'); // Cria um novo elemento <div>
                card.classList.add('card-nota'); // Adiciona a classe CSS para estilização
                card.innerHTML = `
                    <h3>${item.tipo}</h3>
                    <p>Nota: <strong>${item.nota.toFixed(1)}</strong></p>
                `;
                cardsContainer.appendChild(card); // Adiciona o card ao contêiner na página
            });
        } else {
            // Exibe uma mensagem se não houver notas para a disciplina
            cardsContainer.innerHTML = `<p class="mensagem-inicial">Nenhuma nota encontrada para ${disciplina.charAt(0).toUpperCase() + disciplina.slice(1)}.</p>`;
        }
    }
});