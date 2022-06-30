import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';

@NgModule({
  declarations: [GameComponent],
  imports: [CommonModule, GameRoutingModule, FormsModule],
})
export class GameModule {}
