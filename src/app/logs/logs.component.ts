// src/app/logs/logs.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  imports: [CommonModule]
})
export class LogsComponent implements OnInit, OnDestroy {
  logs: any[] = [];
  private logSub: Subscription | undefined;

  constructor(private logsService: LogsService) {}

  ngOnInit(): void {
    this.logsService.connect();

    this.logSub = this.logsService.logStream$.subscribe(log => {
      this.logs.push(log);
      // Optional: Keep the log list size under control
      if (this.logs.length > 100) {
        this.logs.shift(); // Remove the oldest log
      }
    });
  }

  ngOnDestroy(): void {
    this.logSub?.unsubscribe();
    this.logsService.close();
  }
}
