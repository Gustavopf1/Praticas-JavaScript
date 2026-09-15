import { openSync } from "node:fs";
import { criarTarefa, buscarTarefaPorID, concluirTarefa, removerTarefa, listarPorPrioridade, listarConcluidas, listarPendentes, listarTitulos, resumoDasTarefas } from "./tarefas.js";
import * as readline from "node:readline/promises";
import { escape } from "node:querystring";

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

    if (opcao === "3") {

        let tarefa;
        while (tarefa === undefined) {
            const id = await rl.question("Digite o ID da tarefa que deseja marcar como concluida: ");
            tarefa = concluirTarefa(id);

            if (tarefa === undefined) {
                console.log("\nID INVÁLIDO! TENTE NOVAMENTE.\n");
            }
        }
        console.log("\nTarefa marcada como concluída com sucesso!\n");

        iniciarMenu();
    }

    if (opcao === "4") {

        let tarefa;
        while (tarefa === undefined) {
            const id = await rl.question("Digite o ID da tarefa que deseja remover: ");
            tarefa = removerTarefa(id);

            if (tarefa === undefined) {
                console.log("\nID INVÁLIDO! TENTE NOVAMENTE.\n");
            }
        }
        console.log("\nTarefa removida com sucesso!\n");

        iniciarMenu();
    }

    if (opcao === "5") {
         
        const prioridade = await rl.question("Digite a prioridade que deseja listar: ");

        const tarefasPorPrioridade = listarPorPrioridade(prioridade);
        for (let i = 0; i < tarefasPorPrioridade.length; i++) {
            const tarefa = tarefasPorPrioridade[i];

            console.log(`
                ID: ${tarefa.id}
                Título: ${tarefa.titulo}
                Prioridade: ${tarefa.prioridade}
                Concluída: ${tarefa.concluida ? "Sim" : "Não"}
            `);
        }
        iniciarMenu();
    }

    if (opcao === "6") {

        const concluidas = listarConcluidas();

        if (concluidas.length === 0) {
            console.log("\nNenhuma tarefa concluída.\n");
        }
        else {
            console.log("\nEssas são as tarefas marcadas como concluídas:\n");
            for (let i = 0; i < concluidas.length; i++) {
                console.log(`
                    ID: ${concluidas[i].id}
                    Título: ${concluidas[i].titulo}
                    Prioridade: ${concluidas[i].prioridade}
                    Concluída: ${concluidas[i].concluida ? "Sim" : "Não"}
                `);
            }
        } 
        iniciarMenu();
    }

    if (opcao === "7") {

        const pendentes = listarPendentes();

        if (pendentes.length === 0) {
            console.log("\nNenhuma tarefa pendente.\n");
        }
        else {
            console.log("\nEssas são as tarefas pendentes:\n");

            for (let i = 0; i < pendentes.length; i++) {
                console.log(`
                    ID: ${pendentes[i].id}
                    Título: ${pendentes[i].titulo}
                    Prioridade: ${pendentes[i].prioridade}
                    Concluída: ${pendentes[i].concluida ? "Sim" : "Não"}
                `);
            }
        }
        iniciarMenu();
    }
};

iniciarMenu();