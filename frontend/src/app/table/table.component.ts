import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-table',
  standalone: true, // Necessário para projetos sem AppModule
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  imports: [CommonModule] // Adicionar CommonModule no array imports
})
export class TableComponent implements OnInit {
  items: Item[] = [];
  stars: string = '';

  constructor(private itemService: ItemService, private router: Router) {}

  ngOnInit(): void {
    this.itemService.readItems().subscribe((items) => {
      this.items = items;
    });
  }

  // Corrigido: Adicionando o corpo correto do método
  edit(id: any){
    this.router.navigate([`form/${id}`]);
  }

  add(){
    this.router.navigate([`form`]);
  }

  remove(id: any) {
    // Certificando que o id é tratado como string ou número conforme necessário
    const itemId = Number(id);  // Converte o id para número
  
    this.itemService.readItemById(itemId).subscribe(i => {
      if (confirm(`Tem certeza que deseja excluir ${i.name}?`)) {
        this.itemService.deleteItemById(itemId).subscribe({
          next: () => console.log('Excluído'),
          error: () => console.log('Erro'),
          complete: () => location.reload()
        });
      } else {
        this.router.navigate(['']);
      }
    });
  }

}
