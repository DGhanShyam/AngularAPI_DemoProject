import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateRoutingComponent } from './template-routing/template-routing.component';

const routes: Routes = [
  {
    path: 'user',
    component: TemplateRoutingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

