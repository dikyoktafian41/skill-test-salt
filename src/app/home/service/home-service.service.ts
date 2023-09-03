import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApplicationConfigService } from 'src/app/config/application-config.service';
import { createRequestOption } from 'src/app/request/request-util';
import { NewsAdapter } from '../adapter/news.adapter';
import { INewsREST } from '../model/news-rest.model';
import { INews } from '../model/news.model';
import { IActivity } from '../model/activity.model';


@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  protected API_KEY_NEWS = 'cc83528e109c46a7aa1c891feeb9ccf5'
  protected resourceUrl = this.applicationConfigService.getEndpointFor(`https://newsapi.org/v2/top-headlines`); // country=id&apiKey=${this.API_KEY_NEWS}

  constructor(protected http: HttpClient, protected applicationConfigService: ApplicationConfigService, protected newsAdapter: NewsAdapter) {
    this.resourceUrl += `?apiKey=${this.API_KEY_NEWS}`
  }

  getNews(req?: any): Observable<HttpResponse<INews[]>> {
    const options = createRequestOption(req);
    return this.http.get<INewsREST>(this.resourceUrl, { params: options, observe: 'response' }).pipe(
      map(res => this.newsAdapter.news(res))
    );
  }

  getActivity(req?: any): Observable<HttpResponse<IActivity[]>> {
    const options = createRequestOption(req);
    return this.http.get<INewsREST>(this.resourceUrl, { params: options, observe: 'response' }).pipe(
      map(res => this.newsAdapter.activity(res))
    );
  }
}
