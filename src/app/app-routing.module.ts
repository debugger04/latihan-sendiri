import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TodoComponent } from "./todo/todo.component";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    },
    {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
    },
    {
        path: 'todo',
        loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}