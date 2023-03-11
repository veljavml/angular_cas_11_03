import { Component, OnInit } from '@angular/core';
import { Proizvod } from 'src/app/model/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-proizvod',
  templateUrl: './proizvod.component.html',
  styleUrls: ['./proizvod.component.css']
})
export class ProizvodComponent implements OnInit {

  constructor(private servis:ProizvodService) { }

  ngOnInit(): void {

    this.servis.getData().subscribe((data)=>{
      console.log(data);
      this.dataSource.data=data;
    })

  }

  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika','akcija'];

  filter(event: any) {
    if (!event.target.value)
      return;
    this.dataSource.filter = event.target.value.trim().toLowerCase()
  }

  obrisi(id:number){

    if(confirm('Potvrdi brisanje'))
    {
      this.servis.delete(id);
      this.dataSource._updateChangeSubscription();
    }

  }
}
