import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { LoginComponent } from './login/login.component';

import { AccountRouting } from './account.routing';
import { AuthService }  from '../../core/services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  providers: [ AuthService ],
  imports: [
    CommonModule,
    FormsModule,
    AccountRouting
  ]
})
export class AccountModule { }