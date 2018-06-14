import { Component, OnInit } from '@angular/core';
import {FunctionCallModel} from "./../assets/models/function-call.model"
import {FunctionCallService} from "./../assets/services/function.call.service"

@Component({
  selector: 'app-statistics-functions',
  templateUrl: './statistics-functions.component.html',
  styleUrls: ['./statistics-functions.component.css']
})
export class StatisticsFunctionsComponent implements OnInit {

  functionCallArray: Array<FunctionCallModel> = new Array<FunctionCallModel>();
  searchedPhrase:string = "";

  constructor(private _functionCallService: FunctionCallService) { }


  ngOnInit() {
    this.getFunctionCalls()
  }

  getFunctionCalls(){
    this.functionCallArray = new Array<FunctionCallModel>();
    this._functionCallService.getFunctionCalls(this.searchedPhrase).subscribe(user=>{
      user.forEach(item=>{
        this.functionCallArray.push(item);
      })
    })
  }

  log(){
    this.getFunctionCalls();
  }

}
