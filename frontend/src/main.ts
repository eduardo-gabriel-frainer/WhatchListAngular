// import { bootstrapApplication } from '@angular/platform-browser';
// import { importProvidersFrom } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';  // Importa o HttpClientModule
// import { AppComponent } from './app/app.component';
// import { HomeComponent } from './app/home/home.component'; // Importa o seu componente principal

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(HttpClientModule),  // Adiciona o HttpClientModule aos providers
//   ]
// })
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  
import { provideRouter } from '@angular/router'; 
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';// Importa suas rotas

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),  // Mantém o HttpClientModule
    provideRouter(routes) // Adiciona o roteamento
  ]
})
  .catch((err) => console.error(err));
