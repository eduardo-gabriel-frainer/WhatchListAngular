import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true, // Necessário para projetos sem AppModule
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] // Correção no nome (antes estava styleUrl)
})
export class FooterComponent { }
