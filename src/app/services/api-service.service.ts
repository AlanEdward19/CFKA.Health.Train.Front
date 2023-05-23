import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Exercise from '../interfaces/IExercise';
import { enviroment } from 'src/enviroments/enviroment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  getExercises(): Observable<Exercise[]> 
  {
    return this.http.get<Exercise[]>(enviroment.urlApi + '/Exercise');
  }

}


