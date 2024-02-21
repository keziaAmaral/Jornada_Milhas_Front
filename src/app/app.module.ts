import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepoimentosComponent } from './pages/depoimentos/depoimentos.component';
import { MatRadioModule } from '@angular/material/radio';
import { CardDepoimentoComponent } from './pages/card-depoimento/card-depoimento.component';
import { ContainerComponent } from './shared/container/container.component';
import { BannerComponent } from './shared/banner/banner.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { DestinosComponent } from './pages/destinos/destinos.component';
import { PagamentoModalComponent } from './pages/pagamento/pagamento-modal.component';
import { CardDestinoComponent } from './pages/card-destino/card-destino.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DepoimentosComponent,
    CardDepoimentoComponent,
    ContainerComponent,
    BannerComponent,
    FooterComponent,
    HeaderComponent,
    DestinosComponent,
    CardDestinoComponent,
    PagamentoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatIconModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatRadioModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
