import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { ApiService } from 'src/app/services/api.service'
import { Tasks } from '../../core/Tasks'
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'planilhas-detalhe.component.html',
    styleUrls: ['planilhas-detalhe.component.css']
})

export class PlanilhasDetalheComponent implements OnInit{
    
    tasksPost: Tasks[] = [{
        id:'', 
        data: null, 
        trabalhosDoDia:{
            tasks: {
                titulo: '', 
                Projeto: '',
                horaDeInicio: null, 
                horaTermino: null, 
                tempoDaAtividade: null,
                tipoDaAtividade: '',
                Descricao: ''
            }
        }
    }]

    diaDaAtividade;

    cab = ['#','Titulo', 'Projeto','Tipo da Atividade','Descrição', 'Hora de Início', 'Hora do Término', 'Tempo da Atividade']

    constructor(private api: ApiService, private router: Router, private route: ActivatedRoute, private toastr: ToastrService){}

    ngOnInit():void{
        this.getTask(this.route.snapshot.params['id'])
    }

    getTask(id){
        this.api.getOneDayTask(id).subscribe( data => {
            this.diaDaAtividade = data.data
            for(let i = 0; i < data.trabalhosDoDia[0].tasks.length; i++){
                // console.log(data.trabalhosDoDia[0].tasks[i])
                this.tasksPost[i] = data.trabalhosDoDia[0].tasks[i];
            }
            
        })
    }

    confirmarExcluir(){
        this.toastr.success('Task excluída com sucesso !');
    }
}