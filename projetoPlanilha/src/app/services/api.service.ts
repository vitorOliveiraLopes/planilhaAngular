import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Tasks } from '../core/Tasks'

const urlApi = 'http://localhost:3000/posts'

@Injectable({ providedIn: 'root' })
export class ApiService {

    constructor(private http:HttpClient){}

    getTasks(): Observable<Tasks[]>{
        return this.http.get<Tasks[]>(urlApi)
            .pipe(
                tap(tasks => console.log("Tasks retornadas com sucesso")),
                catchError(this.handleError('getTasks', []))
            )
    }

    getOneDayTask(id:number): Observable<Tasks>{
        const url = `${urlApi}/${id}`
        return this.http.get<Tasks>(url)
        .pipe(tap( task => console.log(`Task da tabela com id: ${id}`)),
        catchError(this.handleError<Tasks>(`getOneDayTask id = ${id}`))
        )
    }

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);

            return of (result as T)
        }
    }

}