import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { CestaComponent } from "./pages/cesta/cesta.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'cesta', component: CestaComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}