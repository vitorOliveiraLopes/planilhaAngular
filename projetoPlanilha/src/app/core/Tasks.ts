export interface Tasks {
    id: string,
    data: Date,
    trabalhosDoDia:{
        tasks:{
            titulo: string,
            tipoDaAtividade: string,
            horaDeInicio: string,
            horaTermino: string,
            tempoDaAtividade: string,
            Projeto: string,
            Descricao: string
        }
    }
}