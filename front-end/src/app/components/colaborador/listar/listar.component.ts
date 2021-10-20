import { Component, OnInit } from '@angular/core';
import { ColaboradorService } from 'src/app/service/colaborador.service'; 

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colaboradores = [];
  atualColaborador = null;
  atualIndex = 1;
  nome = '';


  constructor(private colaboradorService: ColaboradorService) { }

  ngOnInit(): void {
    this.recuperarColaboradores();
  }

  recuperarColaboradores(): void {
    this.colaboradorService.getAll().subscribe(
      data => {
        this.colaboradores = data;
        console.log(data);
      },

      error => {
        console.log(error);
      }
    );
  };

  recarregarLista(): void {
    this.recuperarColaboradores();
    this.atualColaborador = null;
    this.atualIndex = -1;
  }

  setColaboradorAtivo(colaborador: any, index: any): void {
    this.atualColaborador = colaborador;
    this.atualIndex = index;
  }

  removerTodosColaboradores(): void {
    this.colaboradorService.deleteAll().subscribe(
      res => {
        console.log(res);
        this.atualColaborador = null;
        this.recuperarColaboradores();
      },
      error => {
        console.log(error);
      }
    );
  }

  procurarColaboradorNome(): void {
    this.colaboradorService.findByNome(this.nome).subscribe(
      data => {
        this.colaboradores = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }


}
