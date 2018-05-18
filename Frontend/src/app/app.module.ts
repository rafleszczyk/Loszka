import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NewsComponent } from './news/news.component';
import { NewsService } from './assets/services/news.service';

const routes: Routes = [
  {path: 'news', component: NewsComponent},
  {path: '', redirectTo: '/news', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
