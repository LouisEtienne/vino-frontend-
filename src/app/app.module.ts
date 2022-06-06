import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { EnteteComponent } from './entete/entete.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogBiereComponent } from './dialog-biere/dialog-biere.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogModifComponent } from './dialog-modif/dialog-modif.component';




@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeProduitComponent,
    ProduitComponent,
    EnteteComponent,
    NonTrouveComponent,
    DetailsProduitComponent,
    DialogBiereComponent,
    DialogModifComponent
  ],
  entryComponents:[DialogBiereComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule,
    MatFormFieldModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
