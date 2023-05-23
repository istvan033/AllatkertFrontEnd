import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent {
  
  allatok:any;
  oszlopok=["id","nev","faj","gondozo"];
  ujAllat:any={};

  constructor(private base:BaseService){
      this.base.get().subscribe({
        next:
        (adatok) => {
          this.allatok=adatok;
          console.log(this.allatok);
        },
        error:(e)=>console.log(e)
      }
      );
  }
}
