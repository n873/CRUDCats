import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/Cat';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addCatVisible = false;
  NewCat: Cat = new Cat();

  constructor(public snackBar: MatSnackBar, public catService: CatService) { }

  ngOnInit() {
  }

  DisplayAddCat() {
    this.addCatVisible = true;
  }

  HideAddCat() {
    this.addCatVisible = false;
  }

  AddCat() {
    if ((this.NewCat.name != '' && this.NewCat.name != null)
      && (this.NewCat.color != '' && this.NewCat.color != null)) {
      this.catService.AddCat(this.NewCat);
      this.NewCat = new Cat();
      this.OpenSnackBar('Cat saved');
      this.addCatVisible = false;
    } else { this.snackBar.open('Oops, looks like that cat is missing something'); }
  }

  OpenSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
