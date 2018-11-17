import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './task/add/add.component';
import { ViewComponent } from './task/view/view.component';

const routes: Routes = [
    {path: 'view', component: ViewComponent},
    {path: 'add', component: AddComponent},
    {path: '**', pathMatch:'full', redirectTo: '/view'}

]

export const routing = RouterModule.forRoot(routes);