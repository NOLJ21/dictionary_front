import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DictionaryService } from '../../services/dictionary.service';
import { Word } from '../../models/word';
import { PartOfSpeech } from '../../models/partOfSpeech';

@Component({
  selector: 'app-list-dictionary',
  templateUrl: './list-dictionary.component.html',
  styleUrls: ['./list-dictionary.component.css']
})
export class ListDictionaryComponent {

  listDictionary: Word[] | undefined;
  listPartOfSpeech: PartOfSpeech[] | undefined;
  
  listIterator: Iterator<PartOfSpeech> | undefined;
  partOfSpeechActual: PartOfSpeech | undefined;

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
    this.dictionaryService.getAllDictionary().subscribe(
      (response: any) => {
        this.listDictionary = response;
        console.log(this.listDictionary);
      }
    );
    this.dictionaryService.getAllPartOfSpeech().subscribe(
          (response: any) => {
            this.listPartOfSpeech = response;
            console.log(this.listPartOfSpeech);
          }
        );
    this.listIterator = this.listPartOfSpeech?.[Symbol.iterator]();
    this.listIterator?.next();
  }

      bookDelete(id: number) {
        this.dictionaryService.deleteWord(id).subscribe(
          (response: any) => {
            console.log(response);
            this.ngOnInit();
          },
          (error: HttpErrorResponse) => {
            console.log(error.message);
          }
        );
      }

      mostrarSiguienteProducto(): void {
        const next = this.listIterator?.next();
        if (!next?.done) {
          this.partOfSpeechActual = next?.value;
        }
      }

      mostrarProductoAnterior(): void {
        // no existe un método para ir hacia atrás
        // pero podemos reiniciar el iterador
        this.listIterator = this.listPartOfSpeech?.[Symbol.iterator]();
        this.mostrarSiguienteProducto();
      }

}
