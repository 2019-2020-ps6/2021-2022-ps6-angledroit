import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Answer, Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './game-quiz.component.html',
  styleUrls: ['./game-quiz.component.scss']
})
export class GameQuizComponent implements OnInit {

  indexQuiz: number = 0;
  CorrectAnsw: number = 0;
  selectedAnswer = new Map();
  public question: Question;
  public answer: Answer;
  public quiz: Quiz;
  resultAffiche : boolean = false;
  id : string



constructor(private route: ActivatedRoute, private quizService: QuizService,) {
    this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(this.id);
  }

  isEnd() {
    return this.indexQuiz >= this.quiz.questions.length;
  }
  next(){
    this.indexQuiz++;
  }

}
