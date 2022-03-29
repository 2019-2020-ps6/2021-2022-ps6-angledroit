import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_LIST_ALBERT: Question[] = [
    {
        id: '1',
        label: 'Connaissez-vous cette personne ?',
        answers: [
            {
                value: 'Oui',
                isCorrect: true,
            },
            {
                value: 'Non',
                isCorrect: false,
            },
            {
                value: 'Je ne sais pas',
                isCorrect: false,
            }
        ]
    },
    {
    id: '2',
    label: 'Qui est cette personne ?',
    answers: [
        {
            value: 'Votre Femme',
            isCorrect: true,
        },
        {
            value: 'Votre Soeur',
            isCorrect: false,
        },
        {
            value: 'Votre Fille',
            isCorrect: false,
        },
        {
            value: 'Je ne sais pas',
            isCorrect: false,
        }
    ]
},
{
    id: '3',
    label: 'Comment s appelle t elle ?',
    answers: [
        {
            value: 'Pierrette',
            isCorrect: false,
        },
        {
            value: 'Huguette',
            isCorrect: false,
        },
        {
            value: 'Jeanine',
            isCorrect: true,
        },
        {
            value: 'Je ne sais pas',
            isCorrect: false,
        }
    ]
},
];

export const QUESTION_ACTOR: Question = {
    id: '2',
    label: 'Jean Gabin a joué dans...',
    answers: [
        {
            value: 'Les tuches II',
            isCorrect: false,
        },
        {
            value: 'La grande illusion',
            isCorrect: true,
        }
    ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        id: '1',
        name: 'Albert',
        theme: 'Famille',
        questions: QUESTION_LIST_ALBERT,
    },
    {
        id: '2',
        name: 'Les technos WEB',
        questions: [],
    }
];
