import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { GardienConnexionGuard } from './Auth/gardien-connexion.guard';
import { DialogBouteilleComponent } from './dialog-bouteille/dialog-bouteille.component';
import { DialogModifComponent } from './dialog-modif/dialog-modif.component';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { ListeProduitComponent } from './liste-produit/liste-produit.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';

const routes: Routes = [
  // {path : "", component:AccueilComponent},
  {path : "", component:ListeProduitComponent}, //, canActivate:[GardienConnexionGuard]
  {path : "produit/:id", component:DetailsProduitComponent, canActivate:[GardienConnexionGuard]},
  {path : "", component:DialogBouteilleComponent, canActivate:[GardienConnexionGuard]},
  {path : "modifier/:id", component:DialogModifComponent, canActivate:[GardienConnexionGuard]},
  {path : "delete/:id", component:DialogDeleteComponent, canActivate:[GardienConnexionGuard]},
  {path : "**", component:NonTrouveComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }