/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Modules */
import {AuthModule} from "./auth.module";


/* Containers */
import * as authContainers from './containers';


export const AuthRoutes: Routes = [

    {
        path: 'login',
        component: authContainers.LoginComponent
    }

]

@NgModule({
    imports: [AuthModule, RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule],
})
export class AuthRoutingModule {}
