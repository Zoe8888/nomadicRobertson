import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { UserQuery, UserService } from 'src/app/stores/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private userService: UserService,
    public userQuery: UserQuery,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        Validators.compose([
          Validators.maxLength(100),
          Validators.required,
          Validators.email,
        ]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  async onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    await this.userService
      .login(this.f.email.value.trim(), this.f.password.value)
      .then((success) => {
        console.log(success);
        if (success) {
          this.navCtrl.navigateBack('');
        }
      });
  }
}
