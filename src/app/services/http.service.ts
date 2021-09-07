import { Injectable } from '@angular/core';
import { Http, HttpOptions, HttpResponse } from '@capacitor-community/http';
import { environment } from 'src/environments/environment';
import { Md5 } from 'ts-md5';
import { UserQuery } from '../stores/user';

const base = environment.baseURI + 'api/';
const key = environment.key;
const realm = environment.realm;

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  auth: any;

  constructor(private userQuery: UserQuery) {
    this.userQuery.select(['username', 'ha1']).subscribe((user) => {
      this.auth = user;
    });
  }

  async request(
    method: 'GET' | 'POST',
    uri: string,
    params?: any,
    ownUrl?: boolean
  ) {
    const ha2 = Md5.hashStr(`${method}:${uri}`);
    const nonce = new Date().getTime();
    const response = Md5.hashStr(`${this.auth.ha1}:${nonce}:${ha2}`);
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const Authorization = `Digest username="${this.auth.username}",realm="${realm}", nonce="${nonce}",uri="${uri}",response="${response}"`;
    const url = ownUrl ? uri : `${base}${uri}`;

    const headers = {
      'content-Type': 'application/json',
      Authorization: '',
    };

    if (!ownUrl) {
      headers.Authorization = Authorization;
      headers['X-Concursive-Key'] = `key=${key}`;
    }

    const call: HttpOptions = { method, url, headers };

    if (method === 'GET' && params) {
      call.params = params;
    } else if (params) {
      call.data = params;
    }

    const { data }: HttpResponse = await Http.request(call);

    return data;
  }
}
