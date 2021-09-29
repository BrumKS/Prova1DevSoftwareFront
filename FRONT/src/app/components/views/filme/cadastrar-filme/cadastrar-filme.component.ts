import { FilmeService } from 'src/app/services/filme.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Filme } from 'src/app/models/filme';

@Component({
  selector: 'app-cadastrar-filme',
  templateUrl: './cadastrar-filme.component.html',
  styleUrls: ['./cadastrar-filme.component.css']
})
export class CadastrarFilmeComponent implements OnInit {

  nome!: string;
  tipo!: string;
  distribuidora!: string;
  classificacao!: number;

  
  constructor(private router: Router, private service: FilmeService) { }

  ngOnInit(): void {}

  cadastrar(): void {
    let filme: Filme = {
      nome: this.nome,
      tipo: this.tipo,
      distribuidora: this.distribuidora,
      classificacao: this.classificacao,
    };
    this.service.create(filme).subscribe((filme) => {
      console.log(filme);
      this.router.navigate(["filme/listar"]);
    });
  }

}
