import { FilmeService } from 'src/app/services/filme.service';
import { Filme } from 'src/app/models/filme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-filme',
  templateUrl: './listar-filme.component.html',
  styleUrls: ['./listar-filme.component.css']
})
export class ListarFilmeComponent implements OnInit {

  filmes: Filme[] = [];
  
  constructor(private service: FilmeService) { }

  ngOnInit(): void {
    this.service.list().subscribe((filmes) => {
      this.filmes = filmes;
      console.log(filmes);
    });
  }

}
