import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizListComponent } from './quizzes/quiz-list/quiz-list.component';
import { EditQuizComponent } from './quizzes/edit-quiz/edit-quiz.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { AccueilComponent } from './accueil/accueil.component';
import {QuiztestComponent} from "./quiztest/quiztest.component";
import { GameQuizComponent } from './quizzes/game-quiz/game-quiz.component';
import { PatientDataComponent } from './patient-data/patient-data.component';
import { TabdonComponent } from './tabdon/tabdon.component';
import { PagedeconnexionComponent } from './pagedeconnexion/pagedeconnexion.component';
import { StatsQuizComponent } from './quizzes/stats-quiz/stats-quiz.component';
import { RecapComponent } from './recap/recap.component';



const routes: Routes = [
    {path: 'user-list', component: UserListComponent},
    {path: 'quiz-list', component: QuizListComponent},
    {path: 'game-quiz/:id', component: GameQuizComponent},
    {path: 'edit-quiz/:id', component: EditQuizComponent},
    {path: 'accueil', component: AccueilComponent},
    {path: 'stats-quiz', component : StatsQuizComponent},
    {path: 'DataPatient', component : PatientDataComponent},
    {path: 'tabdon', component : TabdonComponent},
    {path: 'pagedeconnexion', component : PagedeconnexionComponent },
  {path: 'quiztest', component: QuiztestComponent},
  {path: 'recap', component: RecapComponent},
    { path: '', redirectTo: '/quiz-list', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
