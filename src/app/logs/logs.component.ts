import { Component, inject, OnInit, signal } from '@angular/core';
import { LogsService } from '../services/logs.service';
import { Log } from '../model/log.type';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-logs',
  imports: [],
  templateUrl: './logs.component.html',
  styleUrl: './logs.component.scss'
})
export class LogsComponent implements OnInit{
  logService  = inject(LogsService);
  logEntries = signal<Array<Log>>([]);
  ngOnInit(): void {
    this.logService.getLogsFromApi()
    .pipe(
      catchError((err) =>{
        console.log(err);
        throw err;
      })
    ).subscribe((logs) => {
      this.logEntries.set(logs);
    })    
  }
}
