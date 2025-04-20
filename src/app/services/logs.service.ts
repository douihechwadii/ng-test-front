import { inject, Injectable } from '@angular/core';
import { Log } from '../model/log.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  http = inject(HttpClient);
  getLogsFromApi() {
    const url = `http://127.0.0.1:8000/dashboard`
    return this.http.get<Array<Log>>(url)
  }
}
