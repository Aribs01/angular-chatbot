import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AiChatComponent } from './ai-chat/ai-chat.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    AiChatComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
