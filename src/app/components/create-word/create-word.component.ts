import { Component } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { DictionaryService } from '../../services/dictionary.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-word',
  templateUrl: './create-word.component.html',
  styleUrls: ['./create-word.component.css']
})
export class CreateWordComponent {
  

  createWordForm!: FormGroup;

  constructor(private dictionaryService: DictionaryService, private formBuilder: FormBuilder, private router: Router) { 
    console.log("formulario");
  }

  ngOnInit(): void {
    this.createWordForm = this.formBuilder.group({
      word: ['', Validators.required]
    });
  }

  onSubmit(): void{
    
    console.log(this.createWordForm.get('word')?.value);
    this.dictionaryService.addWord(this.createWordForm.get('word')?.value).subscribe(
      (response: any) => {
        console.log(response);
        this.createWordForm.reset();
        this.router.navigate(['home']);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

}
