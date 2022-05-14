import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer, Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})
export class RecapComponent implements OnInit {
  public question: Question;
  public answer: Answer;
  public quiz: Quiz;
  

  @Input()
  questions : Question[]

  constructor(private route: ActivatedRoute,private quizService: QuizService,private router: Router) { 
    this.quizService.quizSelected$.subscribe((quiz) => (this.quiz = quiz));
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
  }


  

  getCorrectAnswer(indexQuestion){
    for(let i = 0;i<4;i++){
      if(this.questions[indexQuestion].answers[i].isCorrect) {
        return this.questions[indexQuestion].answers[i];
      }
    }
  }

  replay(){
    window.location.reload();
  }

  

}


