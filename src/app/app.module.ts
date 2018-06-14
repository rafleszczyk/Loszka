import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NewsService } from './assets/services/news.service';
import { FunctionCallService } from './assets/services/function.call.service'

import { NewsComponent } from './news/news.component';
import { StatisticsFunctionsComponent } from './statistics-functions/statistics-functions.component'

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: 'statistics', component: StatisticsFunctionsComponent},
  {path: '', redirectTo: '/news', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    StatisticsFunctionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [NewsService,
              FunctionCallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
