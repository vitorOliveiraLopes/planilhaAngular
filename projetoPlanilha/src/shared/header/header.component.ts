import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    selector: 'c-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent{
    constructor(private router: Router){}


    isHomeRoute(){
        return this.router.url != '/home';
    }

    confirmarExcluir(){
        
    }
}