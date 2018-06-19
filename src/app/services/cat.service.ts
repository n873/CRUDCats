import { Injectable } from '@angular/core';
import { Globals } from '../globals/cat.globals';
import { Cat } from '../models/cat';

@Injectable()
export class CatService {

    constructor(private globals: Globals) { }

    GetCats(): Cat[] {
        if (this.globals.cats != null) {
            return this.globals.cats;
        }
    }

    AddCat(cat: Cat): boolean {
        const newArrayLength = this.globals.cats.push(cat);
        if (newArrayLength > 0) { return true; }
            return false;
    }

    UpdateCat(cat: Cat): boolean {
        const existingCatIndex = this.globals.cats.findIndex(item => item.name === cat.name);

        if (existingCatIndex > -1) {
            this.globals.cats[existingCatIndex] = cat;
            return true;
        }
        return false;
    }

    DeleteCat(cat: Cat): boolean {
        const existingCatIndex = this.globals.cats.indexOf(cat, 0);

        if (existingCatIndex > -1) {
            this.globals.cats.splice(existingCatIndex, 1);
            return true;
         }
        return false;
    }
}
