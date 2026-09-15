import { criarTarefa, buscarTarefaPorID, concluirTarefa, removerTarefa, listarPorPrioridade, listarConcluidas, listarPendentes, listarTitulos, resumoDasTarefas } from "./tarefas.js";
import * as readline from "node:readline/promises";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const mostrarMenu = () => {
    console.log(`
    === LISTA DE TAREFAS ===

    1 - Criar tarefa
    2 - Buscar tarefa por ID
    3 - Concluir tarefa
    4 - Remover tarefa
    5 - Listar por prioridade
    6 - Listar tarefas concluídas
    7 - Listar tarefas pendentes
    8 - Listar títulos
    9 - Exibir resumo das tarefas
    0 - Sair
    `);
};

const iniciarMenu = async () => {
    mostrarMenu();

    const opcao = await rl.question("Escolha uma opcao: ");

    if (opcao === "1") {

        const titulo = await rl.question("Digite o título da tarefa: ");
        const prioridade = await rl.question("Digite a prioridade da tarefa: ");
        criarTarefa(titulo, prioridade);
        console.log("\nTarefa criada com sucesso!\n");

        iniciarMenu();
    }

    if (opcao === "2") {

        let tarefa;
        while (tarefa === undefined) {
            const id = await rl.question("Digite o ID da tarefa: ");
            tarefa = buscarTarefaPorID(id);

            if (tarefa === undefined) {
                console.log("\nID INVÁLIDO! TENTE NOVAMENTE.\n");
            }
        }
        console.log("\nTarefa encontrada: ");
        console.log(`
            ID: ${tarefa.id}
            Título: ${tarefa.titulo}
            Prioridade: ${tarefa.prioridade}
            Concluída: ${tarefa.concluida ? "Sim" : "Não"}
        `)
        iniciarMenu();
    }
};

iniciarMenu();