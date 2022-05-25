import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { doesNotReject } from 'assert';
import { Answer, Question } from 'src/models/question.model';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';

@Component({
  selector: 'app-game-quiz',
  templateUrl: './game-quiz.component.html',
  styleUrls: ['./game-quiz.component.scss']
})
export class GameQuizComponent implements OnInit {

  indexQuestion: number = 0;
  Score: number = 0;
  selectedAnswer = new Map();
  public question: Question;
  public answer: Answer;
  public quiz: Quiz;
  resultAffiche : boolean = false;
  listAnswer : Answer[];
  id : string



constructor(private route: ActivatedRoute, private quizService: QuizService,) {
    this.quizService.quizSelected$.subscribe((quiz) => {
      this.quiz = quiz;
      console.log(quiz);
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(this.id);
  }

  isEnd() {
    return (this.indexQuestion >= this.quiz.questions.length);
  }

  next(){
    this.indexQuestion++;
  }

  getAnswers(question : Question){
    this.listAnswer=question.answers;
    return question.answers;
  }



  getCorrectAnswer() {
    for(let i = 0;i<4;i++){
      if(this.quiz.questions[this.indexQuestion].answers[i].isCorrect){
        return this.quiz.questions[this.indexQuestion].answers[i];
        //setTimeout(()=> {
        //return this.quiz.questions[this.indexQuestion].answers[i];
        //},10000);
      }
    }

  }

  getScore(){
    return this.Score;
  }

  ifCorrect1stQuestion(){
    for(let i = 0;i<2;i++){
          if(this.quiz.questions[0].answers[i].isCorrect){
            return this.quiz.questions[this.indexQuestion].answers[i];
          }
    }
  }

  getindexQuestion(){
    return this.indexQuestion;
  }

  resultDisplay(){
    this.resultAffiche = true;
    setTimeout(()=> {
      this.resultAffiche = false;
      this.indexQuestion++;
    },100);
  }

  answerQuestion(answer : Answer){
    if(!answer.isCorrect && this.indexQuestion==0){
       this.indexQuestion=this.quiz.questions.length;
      }
    if(answer.isCorrect) {
      this.Score++;
    }
    this.resultDisplay()
  }
}
