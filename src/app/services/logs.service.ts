// src/app/log.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private socket: WebSocket | null = null;
  public logStream$ = new Subject<any>();

  connect(): void {
    if (this.socket) return;

    this.socket = new WebSocket('ws://127.0.0.1:8000/ws/dashboard/');

    this.socket.onopen = () => {
      console.log('Connected to WebSocket server.');
    };

    this.socket.onmessage = (event) => {
      try {
        const log = JSON.parse(event.data);
        this.logStream$.next(log);
      } catch (e) {
        console.error('Error parsing log:', e);
      }
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    this.socket.onclose = () => {
      console.warn('WebSocket closed.');
      this.socket = null;
    };
  }

  close(): void {
    this.socket?.close();
  }
}
