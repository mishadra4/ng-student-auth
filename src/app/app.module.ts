import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LectureComponent} from './lecture/lecture.component';
import {LecturesComponent} from './lectures/lectures.component';
import {SubjectsComponent} from './subjects/subjects.component';
import {LectureService} from './_services/lecture.service';
import {SubjectService} from './_services/subject.service';
import {StudentService} from './_services/student.service';
import {LectureFormComponent} from './lecture-form/lecture-form.component';
import {SubjectComponent} from './subject/subject.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthService} from './_services/auth.service';
import {ErrorInterceptor} from './_helpers/error.interceptor';
import {JwtInterceptor} from './_helpers/jwt.interceptor';
import {AuthGuard} from './_helpers/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BarcodeScannerComponent} from './barcode-scanner/barcode-scanner.component';
import {BarecodeScannerLivestreamModule} from 'ngx-barcode-scanner';
import {EnrollComponent} from './enroll/enroll.component';
import {MatButtonModule, MatDialogModule, MatExpansionModule, MatRadioModule, MatSortModule} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {DataUploadComponent} from './data-upload/data-upload.component';
import {MatFileUploadModule} from 'angular-material-fileupload';
import {AdminAuthGuard} from './_helpers/admin.auth.guard';
import {LecturerAuthGuard} from './_helpers/lecturer.auth.guard';
import {StudentAuthGuard} from './_helpers/student.auth.guard';
import {LabService} from './_services/lab.service';
import {LabFormComponent} from './lab-form/lab-form.component';
import {LabComponent} from './lab/lab.component';
import {LabsComponent} from './labs/labs.component';
import {GlobalErrorHandler} from './_helpers/global.error.handler';
import { SimplePopupComponent } from './simple-popup/simple-popup.component';
import {ProfileComponent} from './profile/profile.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {PasswordService} from './_services/password.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    LectureComponent,
    LecturesComponent,
    SubjectsComponent,
    LectureFormComponent,
    SubjectComponent,
    HomeComponent,
    BarcodeScannerComponent,
    EnrollComponent,
    DataUploadComponent,
    LabFormComponent,
    LabComponent,
    LabsComponent,
    SimplePopupComponent,
    ProfileComponent,
    ChangePasswordComponent
  ],
  entryComponents: [
    SimplePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatRadioModule,
    MatSortModule,
    MatTableModule,
    MatDialogModule,
    MatFileUploadModule,
    BarecodeScannerLivestreamModule,
    RouterModule.forRoot([
      {
        path: '', component: HomeComponent, canActivate: [AuthGuard]
      },
      {
        path: 'subjects',
        component: SubjectsComponent, canActivate: [LecturerAuthGuard],
        children: [
          {
            path: ':subjectId',
            component: SubjectComponent, canActivate: [LecturerAuthGuard],
            children: [
              {
                path: 'lectures',
                component: LecturesComponent, canActivate: [LecturerAuthGuard],
                children: [
                  {
                    path: 'create', component: LectureFormComponent
                  },
                  {
                    path: ':lectureId', component: LectureComponent
                  }
                ]
              },
              {
                path: 'labs',
                component: LabsComponent, canActivate: [LecturerAuthGuard],
                children: [
                  {
                    path: 'createLab', component: LabFormComponent
                  },
                  {
                    path: ':labId', component: LabComponent
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'subjects', component: SubjectsComponent, canActivate: [LecturerAuthGuard]
      },
      {
        path: 'student/lecture/:lectureId/enroll', component: EnrollComponent, canActivate: [StudentAuthGuard]
      },
      {
        path: 'upload', component: DataUploadComponent, canActivate: [AdminAuthGuard]
      },
      {
        path: 'profile', component: ProfileComponent, canActivate: [AuthGuard],
      },
      {
        path: 'profile/password/change', component: ChangePasswordComponent, canActivate: [AuthGuard]
      }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    LectureService,
    LabService,
    SubjectService,
    StudentService,
    PasswordService,
    AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    AuthGuard,
    AdminAuthGuard,
    LecturerAuthGuard,
    StudentAuthGuard,
    {provide: ErrorHandler, useClass: GlobalErrorHandler}
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
