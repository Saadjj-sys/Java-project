import { Routes } from '@angular/router';
import { CreateClientComponent } from './Client/create-client/create-client.component';
import { ClientListComponent } from './Client/client-list/client-list.component';
import { ClientDetailsComponent } from './Client/client-details/client-details.component';
import { ClientUpdateComponent } from './Client/client-update/client-update.component';
import { FournisseurListComponent } from './Fournisseur/fournisseur-list/fournisseur-list.component';
import { FournisseurCreateComponent } from './Fournisseur/fournisseur-create/fournisseur-create.component';
import { FournisseurDetailsComponent } from './Fournisseur/fournisseur-details/fournisseur-details.component';
import { FournisseurUpdateComponent } from './Fournisseur/fournisseur-update/fournisseur-update.component';




export const routes: Routes = [
    //--------------Client---------------------//
    {
        path: 'client-list',
        component: ClientListComponent
    },

    {
        path: 'client-new',
        component: CreateClientComponent
    },

    {
        path: 'client-details/:idClient',
        component: ClientDetailsComponent
    },

    {
        path: 'client-update/:idClient',
        component: ClientUpdateComponent
    },
    //--------------Fournisseur---------------------//
    {
        path: 'fournisseur-list',
        component: FournisseurListComponent
    },
    {
        path: 'fournisseur-new',
        component: FournisseurCreateComponent
    },
    {
        path: 'fournisseur-details/:idFour',
        component: FournisseurDetailsComponent
    },

    {
        path: 'fournisseur-update/:idFour',
        component: FournisseurUpdateComponent
    },
];
