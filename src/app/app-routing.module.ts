import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GardienConnexionGuard } from './Auth/gardien-connexion.guard';
import { DialogBiereComponent } from './dialog-biere/dialog-biere.component';
import { DialogModifComponent } from './dialog-modif/dialog-modif.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  // {path : "", component:AccueilComponent},
  {path : "", component:ListeProduitComponent}, //, canActivate:[GardienConnexionGuard]
  {path : "produit/:id", component:DetailsProduitComponent, canActivate:[GardienConnexionGuard]},
  {path : "", component:DialogBiereComponent, canActivate:[GardienConnexionGuard]},
  {path : "", component:DialogModifComponent, canActivate:[GardienConnexionGuard]},
  {path : "**", component:NonTrouveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

