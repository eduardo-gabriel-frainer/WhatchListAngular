import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { TableComponent } from "./table/table.component";
import { HomeComponent } from './home/home.component';
import { ModalFormComponent } from "./modal-form/modal-form.component";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, HeaderComponent, ReactiveFormsModule]
  // imports: [RouterOutlet, HeaderComponent, FooterComponent, TableComponent, HomeComponent, ModalFormComponent]
})
export class AppComponent {
  title = 'frontend';
}
