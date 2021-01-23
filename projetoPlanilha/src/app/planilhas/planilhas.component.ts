import { Component, OnInit } from '@angular/core';
import { Tasks } from '../core/Tasks';
import { ApiService } from '../services/api.service';

@Component({
    templateUrl: 'planilhas.component.html',
    styleUrls: ['planilhas.component.css']
})

export class PlanilhasComponent implements OnInit {
    
    tasks: Tasks[];

    headers = ['ID', 'Data','']

    constructor(private api: ApiService){}

    ngOnInit(){
        this.api.getTasks().subscribe(
            res => {
                this.tasks = res;
                console.log('Tasks lidas com sucesso pelo component')
            }
        )
    }

}