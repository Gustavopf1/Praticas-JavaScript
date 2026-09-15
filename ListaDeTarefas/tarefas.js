const tarefas = [];

export const criarTarefa = (titulo, prioridade) => {

    const tarefa = {
        id: tarefas.length + 1,
        titulo: titulo,
        prioridade: prioridade,
        concluida: false
    }
    tarefas.push(tarefa);

    return tarefa;
}

export const buscarTarefaPorID = (id) => {
    const resultado = tarefas.find((tarefa) => tarefa.id === Number(id));

    return resultado;
}

export const concluirTarefa = (id) => {
    const tarefa = buscarTarefaPorID(id);

    if (tarefa === undefined) {
        return;
    }
    tarefa.concluida = true;
    return tarefa;
}

export const removerTarefa = (id) => {
    const posicao = tarefas.findIndex((tarefa) => tarefa.id === Number(id));

    if (posicao === -1) {
        return;
    }
    const removidos = tarefas.splice(posicao, 1);
    return removidos[0];
}

export const listarPorPrioridade = (prioridade) => {
    const resultado = tarefas.filter((tarefa) => tarefa.prioridade === prioridade);

    return resultado;
}

export const listarConcluidas = () => {
    const resultado = tarefas.filter((tarefa) => tarefa.concluida === true);

    return resultado;
}

export const listarPendentes = () => {
    const resultado = tarefas.filter((tarefa) => tarefa.concluida === false);

    return resultado;
}

export const listarTitulos = () => {
    const titulos = tarefas.map((tarefa) => tarefa.titulo);

    return titulos;
}