import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutes} from "./auth";

const routes: Routes = [

     {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth/login',
      },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth-routing.module').then(m => m.AuthRoutingModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
