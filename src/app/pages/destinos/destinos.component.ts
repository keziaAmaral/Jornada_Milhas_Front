import { Component, OnInit } from '@angular/core';
import { Destino } from 'src/app/entities/destino';
import { DestinoService } from 'src/app/services/destino/destino.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.scss']
})
export class DestinosComponent implements OnInit {
  destinos!: Destino[];

  constructor(private service: DestinoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(
      res => {
        this.destinos = res;
      })
  }
}


