import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/service/colaborador.service'; 

@Component({
  selector: 'app-criar',
  templateUrl: './criar.component.html',
  styleUrls: ['./criar.component.css']
})
export class CriarComponent implements OnInit {

  colaborador = {
    nome: '',
    cpf: '',
    setor: '',
  };

  submitted = false;

  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
  }

  criarColaborador(): void {
    const data = {
      nome: this.colaborador.nome,
      cpf: this.colaborador.cpf,
      setor: this.colaborador.setor
    }

    this.colaboradorService.create(data).subscribe(
      res => {
        console.log(res);
        this.submitted = true;
      },
      error => {
        console.log(error);
      }
    );
  };

  novoColaborador(): void {
    this.submitted = false;
    this.colaborador = {
      nome: '',
      cpf: '',
      setor: '',
    }
  };
}

