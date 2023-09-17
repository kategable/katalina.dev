import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootStateRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(rootStateRoutes), RouterModule],
})
export class RootStateModule {}
