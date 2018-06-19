import { Component, OnInit } from '@angular/core';
import { CatService } from '../../services/cat.service';
import { Cat } from '../../models/cat';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatSnackBarComponent } from '../catsnackbar/catsnackbar.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [CatService]
})
export class DetailComponent implements OnInit {

  Cats: Cat[];
  NewCat: Cat = new Cat();
  constructor(public snackBar: MatSnackBar, public catService: CatService) { }

  ngOnInit() {
    this.LoadCats();
  }

  LoadCats() {
    this.Cats = this.catService.GetCats();
  }

  AddCat() {
    if (this.NewCat.name !== '' && this.NewCat.color !== '') {
      this.catService.AddCat(this.NewCat);
      this.NewCat = new Cat();
      this.OpenSnackBar();
      this.LoadCats();
    }
  }

  DeleteCat() {

  }

  private OpenSnackBar() {
    this.snackBar.openFromComponent(CatSnackBarComponent, { duration: 400});
  }
}
