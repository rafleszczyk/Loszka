import { NewsModel } from './../models/news.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class NewsService {

  constructor(private _http: HttpClient) {}

  getNews(): Observable<Array<NewsModel>> {
    return this._http.get<Array<any>>('http://localhost:8080/news');
  }
  addNews(news: NewsModel): Observable<NewsModel> {
    return this._http.post<NewsModel>('http://localhost:8080/news', news);
  }
  editNews(news: NewsModel): Observable<NewsModel> {
    return this._http.put<NewsModel>('http://localhost:8080/news/' + news.id, news);
  }
  removeNews(newsId: number): Observable<Array<NewsModel>> {
    return this._http.delete<Array<NewsModel>>('http://localhost:8080/news/' + newsId);
  }

}
