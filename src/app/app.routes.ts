import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewStartComponent } from './Views/view-start/view-start.component';
import { ViewGameComponent} from './Views/view-game/view-game.component';
import { ViewEndGameComponent} from './Views/view-end-game/view-end-game.component';

export const routes: Routes = [
  { path: '', component: ViewStartComponent },
  { path: 'game', component: ViewGameComponent },
  { path: 'end', component: ViewEndGameComponent },
  { path: '**', redirectTo: '' } // fallback do startu
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
