import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/enviroment'
import { PartOfSpeech } from '../models/partOfSpeech';
import { Word } from '../models/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  private wordURL = environment.apiURL + '/api/word/';

  constructor(private http: HttpClient) { }

  getAllDictionary() {
    return this.http.get<Word[]>(this.wordURL+'all');
  }

  deleteWord(id: number) {
    return this.http.delete(this.wordURL+id);
  }

  addWord(word: string) {
    return this.http.post(this.wordURL+word, null);
  }

  getAllPartOfSpeech() {
    return this.http.get<PartOfSpeech[]>(this.wordURL+'all/part');
  }
}
