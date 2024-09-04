// Dados dos alunos
const fs36 = [
    { nome: 'Breno Oliveira', idade: 26 },
    { nome: 'Gustavo', idade: 28 },
    { nome: 'João', idade: 17 },
    { nome: 'Edmar', idade: 22 },
    { nome: 'Rafael', idade: 30 },
    { nome: 'Alberto', idade: 30 },
    { nome: 'Miguel', idade: 17 },
    { nome: 'Darkio', idade: 18 },
    { nome: 'Breno Aragão', idade: 19 }
];

// Função para buscar nomes
const buscarNomes = (pesquisar) => {
    // Verifica se 'pesquisar' é uma string e não é undefined
    if (typeof pesquisar !== 'string') {
        return [];
    }

    const nomeParaComparar = pesquisar.trim().toLowerCase();
    // const idadeParaComparar = pesquisar.trim();
    return fs36.filter(aluno => aluno.nome.toLowerCase().includes(nomeParaComparar));
}

// Função para atualizar a lista de resultados
const atualizarBusca = () => {
    const campoBusca = document.getElementById('campoBusca');
    const resultados = document.getElementById('resultados');
    const pesquisa = campoBusca.value;

    // Obter os resultados da pesquisa
    const resultadosPesquisa = buscarNomes(pesquisa);

    // Limpar resultados anteriores
    resultados.innerHTML = '';

    // Adicionar novos resultados
    resultadosPesquisa.forEach(aluno => {
        if (campoBusca.value.trim() === '') {
            resultados.innerHTML = ''
        } else {
            const div = document.createElement('div');
            div.className = 'pessoa';
            div.innerHTML = `<strong>Nome:</strong> ${aluno.nome}, <strong>Idade:</strong> ${aluno.idade}`;
            resultados.appendChild(div);
            div.style.fontSize = "20px"
        }

    });
}

const salvarDados = () => {
    const nome = document.getElementById('nome').value
    const idade = parseInt(document.getElementById('idade').value)

    if (nome.trim() === '' || isNaN(idade)) {
        alert('Por favor, insira um nome válido e uma idade válida.');
        return;
    }


    fs36.push({ nome, idade })

    console.log(fs36);

    document.getElementById('nome').value = '';
    document.getElementById('idade').value = '';
}
