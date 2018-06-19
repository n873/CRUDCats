import { Injectable } from '@angular/core';
import { Cat } from '../models/Cat';

@Injectable()
export class Globals {
    cats: Array<Cat> = [{ name: 'Garfield', color: 'Orange Striped', description: 'A decendant of the sloth'}];
}
