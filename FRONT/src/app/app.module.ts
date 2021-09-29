import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from "@Angular/common/http";
// Imports dos componentes da aplicação
import { AppComponent } from './app.component';
import { ListarFilmeComponent } from './components/views/filme/listar-filme/listar-filme.component';
import { CadastrarFilmeComponent } from './components/views/filme/cadastrar-filme/cadastrar-filme.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarFilmeComponent,
    CadastrarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
