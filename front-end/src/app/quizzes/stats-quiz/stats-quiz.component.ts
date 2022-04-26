import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-stats-quiz',
  templateUrl: './stats-quiz.component.html',
  styleUrls: ['./stats-quiz.component.scss']
})
export class StatsQuizComponent implements OnInit {

  public quiz: Quiz;
  id : string



  constructor(private router: Router, private quizService: QuizService,) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      console.log(quiz)
    });
  }

  ngOnInit(): void {
    this.quizService.setSelectedQuiz(this.id);
  }

  gamequizSelected(quiz: Quiz): void {
    this.router.navigate(['/game-quiz/' + quiz.id]);
    
  }

}
