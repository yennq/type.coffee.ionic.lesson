import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage {
  private subscription: Subscription = new Subscription(); // khai báo: subscription
  @ViewChild('email') email: any; // khai báo: email
  public userForm: FormGroup; // khai báo: form

  constructor(
    private formBuilder: FormBuilder
  ) {
    // huỷ thông tin account ở dưới local trước khi đăng nhập
    localStorage.removeItem('account');

    // tạo form đăng nhập
    this.userForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]], // yêu cầu không được rỗng và định dạng email
      password: ['', Validators.required], // yêu cầu không được rỗng
      save: [false] // không yêu cầu, mặc định giá trị là false
    });
  }

  ngOnDestroy(): void {
    // huỷ subscription khi thoát ra khỏi màn hình login
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    
  }

  ionViewDidLoad(): void {
    // sau 0.5s tự động focus vào field email
    setTimeout(() => {
      this.email.setFocus();
    }, 500);
  }

  reset(): void {
    this.userForm.reset();
  }

  login(): void {
    // kiểm tra form đã nhập đúng yêu cầu chưa
    if (this.userForm.invalid) {
      // form nhập sai, yêu cầu nhập cho đúng
    } else {
      // form nhập đúng, gửi request lên server thông qua Api
      // để kiểm tra thông tin của user
      // 
    }
  }
}
