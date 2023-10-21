import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FruitsAndVegs } from '../interfaces/FruitsAndVegs';
import { FileContent } from '../interfaces/FileContent';

@Injectable({
  providedIn: 'root'
})
export class FileContentService {
  private apiUrl = 'http://localhost:5207/api/File/GetFileContent'
  constructor(private http: HttpClient) { }

  getFileContent() : Observable<FileContent> {
    return this.http.get<FileContent>(this.apiUrl);
  }
}
