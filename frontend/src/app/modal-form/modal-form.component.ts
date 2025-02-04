import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { MsgService } from '../msg/msg.service';
import { Item } from '../item';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-modal-form',
  standalone: true,
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css'],
  imports: [ReactiveFormsModule, FormsModule, CommonModule]  // Adicionar CommonModule, FormsModule e ReactiveFormsModule
})
export class ModalFormComponent implements OnInit {
  form!: FormGroup;
  item!: Item;
  id: string | null = null;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute, // Injetado corretamente
    private formBuilder: FormBuilder,
    private itemsService: ItemService,
    private msgService: MsgService
  ) {}

  ngOnInit(): void {
    // Corrigido para garantir que a rota está disponível antes de usá-la
    this.id = this.route.snapshot.paramMap.get('id');

    // Inicializando o formulário
    this.form = this.formBuilder.group({
      name: [null, [Validators.required]],
      category: [null, [Validators.required]],
      status: [null, [Validators.required]],
      review: [null, [Validators.required]],
    });

    if (this.id) {
      // Se o ID estiver disponível, carregamos os dados do item
      this.itemsService.readItemById(this.id).subscribe(i => {
        this.form.patchValue(i); // Preenche o formulário com os dados do item
      });
    }
  }

  cancel(): void {
    this.router.navigate(['']); // Redireciona ao cancelar
  }

  save(): void {
    let name = this.form.get('name')?.value;
    let category = this.form.get('category')?.value;
    let status = this.form.get('status')?.value;
    let review = this.form.get('review')?.value;
  
    if (!name || !category || !status || !review) {
      this.errorMessage = 'Preencha todos os campos corretamente!';
      this.msgService.setMsg(this.errorMessage, 'var(--error)');
      return; // Interrompe a execução caso os campos estejam vazios
    }
  
    let newItem = this.form.value;
  
    if (this.id) {
      this.itemsService.UpdateItem({ ...newItem, id: this.id }).subscribe({
        next: () => this.msgService.setMsg('Item editado com sucesso!', 'var(--success)'),
        error: () => this.msgService.setMsg('Erro ao editar!', 'var(--error)'),
        complete: () => this.cancel()
      });
  
    } else {
      this.itemsService.readItems().subscribe(items => {
        let maxId = items.length > 0 ? Math.max(...items.map((item: any) => Number(item.id))) : 0;
        let newId = (maxId + 1).toString();
  
        this.itemsService.CreateItem({ ...newItem, id: newId }).subscribe({
          next: () => this.msgService.setMsg('Item criado com sucesso!', 'var(--success)'),
          error: () => this.msgService.setMsg('Erro ao criar item!', 'var(--error)'),
          complete: () => this.cancel()
        });
      });
    }
  }
}
