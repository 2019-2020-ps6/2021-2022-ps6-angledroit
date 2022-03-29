import { Component, OnInit } from '@angular/core';
import {Answer, Question} from '../../models/question.model';
import {Quiz} from '../../models/quiz.model';
import {ActivatedRoute} from '@angular/router';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-quiztest',
  templateUrl: './quiztest.component.html',
  styleUrls: ['./quiztest.component.scss']
})
export class QuiztestComponent implements OnInit {
  indexQuiz = 0;
  public question: Question;
  public answer: Answer;
  public quiz: Quiz;
  id: string;

  constructor(private route: ActivatedRoute, private quizService: QuizService) {
    this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(this.id);
  }



}
