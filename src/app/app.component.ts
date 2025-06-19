import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header><h1>SPA Funcionários</h1></header>
    <nav>
      <a routerLink="">Home</a> | 
      <a routerLink="funcionarios">Funcionários</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer><p>Rodapé da aplicação</p></footer>
  `,
  styles: [`
    header, footer { background: #ddd; padding: 10px; text-align: center; }
    nav a { margin: 0 10px; }
    main { padding: 20px; }
  `]
})
export class AppComponent {}
