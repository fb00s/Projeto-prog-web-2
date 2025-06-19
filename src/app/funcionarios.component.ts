import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionarios',
  template: `
    <div *ngFor="let f of funcionarios" class="card">
      <div class="foto" [style.backgroundImage]="'url(' + f.foto + ')'"></div>
      <div class="info">
        <div class="nome">{{ f.nome }}</div>
        <div class="propriedade">{{ f.subobjeto.propriedade1 }}</div>
        <div class="propriedade">{{ f.subobjeto.propriedade2 }}</div>
        <div class="email">{{ f.email }}</div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      width: 250px;
      margin: 10px auto;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Arial, sans-serif;
    }
    .foto {
      width: 100%;
      height: 150px;
      background-color: black;
      background-size: cover;
      background-position: center;
    }
    .info {
      padding: 10px;
    }
    .nome, .propriedade {
      font-family: Arial;
    }
    .email {
      font-family: Verdana;
      background-color: gray;
      width: 100%;
      text-align: center;
      padding: 5px;
    }
  `]
})
export class FuncionariosComponent implements OnInit {
  funcionarios = [
    {
      id: 1,
      nome: "Ana Silva",
      foto: "https://via.placeholder.com/250x150",
      email: "ana@empresa.com",
      subobjeto: {
        propriedade1: "RH",
        propriedade2: "Gerente"
      }
    },
    {
      id: 2,
      nome: "Carlos Souza",
      foto: "https://via.placeholder.com/250x150",
      email: "carlos@empresa.com",
      subobjeto: {
        propriedade1: "TI",
        propriedade2: "Desenvolvedor"
      }
    }
  ];
  ngOnInit() {}
}
