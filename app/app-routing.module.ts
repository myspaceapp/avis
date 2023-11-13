import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AvisComponent } from './avis/avis.component';

const routes: Routes = [
    { path : "avis",
      component : AvisComponent
    },
    {
      path: '',
      redirectTo: '/avis',
      pathMatch: 'full',
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
