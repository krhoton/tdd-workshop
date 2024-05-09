import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {Romans} from "./romans";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {debounceTime, distinctUntilChanged, filter, map, Observable} from "rxjs";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-numerals',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './numerals.component.html',
  styleUrl: './numerals.component.css'
})
export class NumeralsComponent {
  protected romanInput: FormControl<number> = new FormControl();
  protected parsedValue$: Observable<string>;

  private romanParser: Romans = new Romans();

  constructor() {
    this.parsedValue$ = this.romanInput.valueChanges.pipe(
      takeUntilDestroyed(),
      distinctUntilChanged(),
      debounceTime(500),
      map((value: number) => this.romanParser.convert(value))
    );
  }

}
