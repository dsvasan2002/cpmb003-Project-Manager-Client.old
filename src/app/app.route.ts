import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './task/add/add.component';
import { ViewTaskComponent } from './task/view/view.component';

const routes: Routes = [
    {path: 'viewTask', component: ViewTaskComponent},
    {path: 'addTask', component: AddTaskComponent},
    {path: '**', pathMatch:'full', redirectTo: '/view'}

]

export const routing = RouterModule.forRoot(routes);