import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { BlogStore } from './blog.store';

@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private blogStore: BlogStore, private http: HttpService) {}

  async getList(profile = 'tulbagh-tourism-tulbagh') {
    return await this.http
      .request('GET', 'blogList', {
        profile,
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.blogStore.upsertMany(result[0].objectList);
          this.blogStore.remove(
            (entity) =>
              !result[0].objectList.some(
                (newEntity) => newEntity.id === entity.id
              )
          );
        }
      });
  }

  async getBlog(id) {
    await this.http
      .request('GET', 'blog/' + id, {
        format: 'json',
      })
      .then((result) => {
        if (result[0]?.objectList?.length > 0) {
          this.blogStore.upsertMany(result[0].objectList);
        }
      });
  }

  async getId(id: string) {
    return await this.http.request('GET', 'blogList', {
      profile: 'tulbagh-tourism-tulbagh',
      id,
      format: 'json'
    })
    .then((result) => result[0]?.objectList[0]);
  }
}
