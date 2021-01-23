import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: 'planilhas-adicionar.component.html',
    styleUrls: ['planilhas-adicionar.component.css']
})
export class PlanilhasAdicionarComponent implements OnInit{

    dadosTask:FormGroup;
    data;

    constructor(private api:ApiService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService){}
    ngOnInit(){
        this.getData();
        this.dadosTask = this.formBuilder.group({
            'data':[null,Validators.required],
            
        })
    }

    adicionarDados(form:NgForm){
        this.api.addTasks(form)
            .subscribe(res => {
                const id = res['id'];
                this.router.navigate(['/task-detalhes', id])
                this.toastr.success('Tasks adicionadas com sucesso !')
            })
    }

    getData(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        this.data = yyyy + '-' + mm + '-' + dd;
        console.log('teste => ' + this.data);
        return this.data;
    }
}
