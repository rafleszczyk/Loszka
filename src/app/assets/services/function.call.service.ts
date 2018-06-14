import { FunctionCallModel } from './../models/function-call.model';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http'


@Injectable()
export class FunctionCallService {
  constructor(private _http: HttpClient) {}

  getFunctionCalls(phrase): Observable<Array<FunctionCallModel>> {
    return this._http.get<Array<any>>('http://localhost:8080/statistics/functions?name='+phrase);
  }
}