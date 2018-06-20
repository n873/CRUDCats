import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CatService]
})
export class DetailComponent implements OnInit {

  Cats: Cat[];
  constructor(public snackBar: MatSnackBar
    , public catService: CatService, public dialog: MatDialog) { }

  ngOnInit() {
    this.LoadCats();
  }

  LoadCats() {
    this.Cats = this.catService.GetCats();
  }

  DeleteCat(cat: Cat) {
    if (cat !== null) {
      const catIndex = this.Cats.findIndex(item => item.name === cat.name);
      this.Cats.splice(catIndex, 1);
      this.OpenSnackBar('Cat deleted');
      this.LoadCats();
    }
  }

  UpdateCat(selectedCat: Cat): void {
    if (selectedCat !== null) {
      const dialogResult = this.dialog.open(EditComponent, {
        width: '250px',
        data: { cat: selectedCat }
      });

      dialogResult.afterClosed().subscribe(updatedCat => {
        if (updatedCat != null &&
          updatedCat.name != '' && updatedCat.name != null
          && updatedCat.color != '' && updatedCat.name != null) {
            const selectedIndex = this.Cats.indexOf(selectedCat);
            this.Cats[selectedIndex] = updatedCat;
      } else { this.snackBar.open('Oops, looks like that cat is missing something'); }
    });
    }
  }

  OpenSnackBar(message: string) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
