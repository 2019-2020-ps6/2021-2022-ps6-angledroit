import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { QuizComponent } from './quizzes/quiz/quiz.component';
import { HeaderComponent } from './header/header.component';
import { QuizFormComponent } from './quizzes/quiz-form/quiz-form.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { AppRoutingModule } from './app.routing.module';
import { QuestionListComponent } from './questions/question-list/question-list.component';
import { QuestionFormComponent } from './questions/question-form/question-form.component';
import { QuestionComponent } from './questions/question/question.component';
import { UserComponent } from './users/user/user.component';
import { UserFormComponent } from './users/user-form/user-form.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import { QuiztestComponent } from './quiztest/quiztest.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { TabdonComponent } from './tabdon/tabdon.component';
import { PagedeconnexionComponent } from './pagedeconnexion/pagedeconnexion.component';
import { StatsQuizComponent } from './quizzes/stats-quiz/stats-quiz.component';
import { RecapComponent } from './recap/recap.component';
import { GameQuizComponent } from './quizzes/game-quiz/game-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    HeaderComponent,
    QuizFormComponent,
    EditQuizComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    UserComponent,
    UserFormComponent,
    UserListComponent,
    AccueilComponent,
    QuiztestComponent,
    PatientDataComponent,
    TabdonComponent,
    PagedeconnexionComponent,
    StatsQuizComponent,
    RecapComponent,
    GameQuizComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
