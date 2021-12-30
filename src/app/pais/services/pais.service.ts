import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string ='https://restcountries.com/v3.1'

  constructor( private http: HttpClient) { }

  buscarPais( termino: string ) : Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ termino }`;
    return this.http.get<Country[]>( url );
      /*.pipe(
        catchError( err => of([]) )
      );*/                                //para que no me devuelva un error si no otro observable con el of
  }


  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }


  getPaisPorCodigo( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha?codes=${ id }`;
    return this.http.get<Country>( url );
  }

}
