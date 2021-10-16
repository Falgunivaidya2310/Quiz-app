import React from 'react'
import './Test.css'
import { useState, useEffect, useMemo } from 'react'
import Trivia from '../../Trivia'
import Timer from '../../Timer'

function Test() {

    const [questionNumber, setQuestionNumber] = useState(1)
    const [stop, setStop] = useState(false)
    const [section, setSection] = useState("easy");
    const [earned, setEarned] = useState("$ 0")

    const data = [
        {
          id: 1,
          question: "Which of the following is true for variable names in C?",
          answers: [
            {
              text: "They can contain alphanumeric characters as well as special characters",
              correct: false,
            },
            {
              text: "It is not an error to declare a variable to be one of the keywords(like goto, static)",
              correct: false,
            },
            {
              text: "Variable names cannot start with a digit",
              correct: true,
            },
            {
              text: "Variable can be of any length",
              correct: false,
            },
          ],
        },
        {
          id: 2,
          question: "Which of the following typecasting is accepted by C?",
          answers: [
            {
              text: "Widening conversions",
              correct: false,
            },
            {
              text: "Narrowing conversions",
              correct: false,
            },
            {
              text: "Widening & Narrowing conversions",
              correct: true,
            },
            {
              text: "None of the mentioned",
              correct: false,
            },
          ],
        },
        {
          id: 3,
          question: "What is called when a function is defined inside a class?",
          answers: [
            {
              text: "Module",
              correct: false,
            },
            {
              text: "Class",
              correct: false,
            },
            {
              text: "Another function",
              correct: false,
            },
            {
              text: "Method",
              correct: true,
            },
          ],
        },
        {
          id: 4,
          question: "Consider the results of a medical experiment that aims to predict whether someone is going to develop myopia based on some physical measurements and heredity. In this case, the input dataset consists of the person’s medical characteristics and the target variable is binary: 1 for those who are likely to develop myopia and 0 for those who aren’t. This can be best classified as",
          answers: [
            {
              text: "Regression",
              correct: false,
            },
            {
              text: "Decision Tree",
              correct: true,
            },
            {
              text: "Clustering",
              correct: false,
            },
            {
              text: "Associative Rules",
              correct: false,
            },
          ],
        },
        {
          id: 5,
          question: "Which of the followings is/are automatically added to every class, if we do not write our own.",
          answers: [
            {
              text: "Copy Constructor",
              correct: false,
            },
            {
              text: "Assignment Operator",
              correct: false,
            },
            {
              text: "A constructor without any parameter",
              correct: false,
            },
            {
              text: "All of the above",
              correct: true,
            },
          ],
        },
        {
          id: 6,
          question: "Which of the following is true?",
          answers: [
            {
              text: "All objects of a class share all data members of class",
              correct: false,
            },
            {
              text: "Objects of a class do not share non-static members. Every object has its own copy.",
              correct: true,
            },
            {
              text: "Objects of a class do not share codes of non-static methods, they have their own copy",
              correct: false,
            },
            {
              text: "None of the above",
              correct: false,
            },
          ],
        },
        {
          id: 7,
          question: "Which of the following cannot be passed to a function in C++ ?",
          answers: [
            {
              text: "Constant",
              correct: false,
            },
            {
              text: "Structure",
              correct: false,
            },
            {
              text: "Array",
              correct: false,
            },
            {
              text: "Header file",
              correct: true,
            },
          ],
        },
        {
          id: 8,
          question: "When a method in a subclass has the same name and type signatures as a method in the superclass, then the method in the subclass _____ the method in the superclass.",
          answers: [
            {
              text: "Overloads",
              correct: false,
            },
            {
              text: "Friendships",
              correct: false,
            },
            {
              text: "Inherits",
              correct: false,
            },
            {
              text: "Overrides",
              correct: true,
            },
          ],
        },
        {
          id: 9,
          question: "scanf() is a predefined function in______header file.",
          answers: [
            {
              text: "stdlib. h",
              correct: false,
            },
            {
              text: "ctype. h",
              correct: false,
            },
            {
              text: "stdio. h",
              correct: true,
            },
            {
              text: "stdarg. h",
              correct: false,
            },
          ],
        },
        {
          id: 10,
          question: "Syntax error in python is detected by _________at _______",
          answers: [
            {
              text: "compiler/ compile time",
              correct: false,
            },
            {
              text: "interpreter/ run time",
              correct: true,
            },
            {
              text: "compiler/ run time",
              correct: false,
            },
            {
              text: "interpreter/ compile time",
              correct: false,
            },
          ],
        },
        {
          id: 11,
          question: "The programming language that has the ability to create new data types is called___.",
          answers: [
            {
              text: "Overloaded",
              correct: false,
            },
            {
              text: "Encapsulated",
              correct: false,
            },
            {
              text: "Reprehensible",
              correct: false,
            },
            {
              text: "Extensible",
              correct: true,
            },
          ],
        },
        {
          id: 12,
          question: "In which language is Python written?",
          answers: [
            {
              text: "English",
              correct: false,
            },
            {
              text: "PHP",
              correct: false,
            },
            {
              text: "C",
              correct: true,
            },
            {
              text: "All of the above",
              correct: false,
            },
          ],
        },
        {
          id: 13,
          question: "Which of the following precedence order is correct in Python?",
          answers: [
            {
              text: "Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
              correct: true,
            },
            {
              text: "Multiplication, Division, Addition, Subtraction, Parentheses, Exponential",
              correct: false,
            },
            {
              text: "Division, Multiplication, Addition, Subtraction, Parentheses, Exponential",
              correct: false,
            },
            {
              text: "Exponential, Parentheses, Multiplication, Division, Addition, Subtraction",
              correct: false,
            },
          ],
        },
        {
          id: 14,
          question: "Which of the following is NOT possible with any 2 operators in C?",
          answers: [
            {
              text: "Different precedence, same associativity",
              correct: false,
            },
            {
              text: "Different precedence, different associativity",
              correct: false,
            },
            {
              text: "Same precedence, different associativity",
              correct: true,
            },
            {
              text: "All of the mentioned",
              correct: false,
            },
          ],
        },
        {
          id: 15,
          question: "Property which allows to produce different executable for different platforms in C is called?",
          answers: [
            {
              text: "File inclusion",
              correct: false,
            },
            {
              text: "Selective inclusion",
              correct: false,
            },
            {
              text: "Conditional compilation",
              correct: true,
            },
            {
              text: "Recursive macros",
              correct: false,
            },
          ],
        },
        {
          id: 16,
          question: "In which process, a local variable has the same name as one of the instance variables?",
          answers: [
            {
              text: "Serialization",
              correct: false,
            },
            {
              text: "Variable Shadowing",
              correct: true,
            },
            {
              text: "Abstraction",
              correct: false,
            },
            {
              text: "Multi-threading",
              correct: false,
            },
          ],
        },
        {
          id: 17,
          question: "An interface with no fields or methods is known as a ______.",
          answers: [
            {
              text: "Runnable Interface",
              correct: false,
            },
            {
              text: "Marker Interface",
              correct: true,
            },
            {
              text: "Abstract Interface",
              correct: false,
            },
            {
              text: "CharSequence Interface",
              correct: false,
            },
          ],
        },
        {
          id: 18,
          question: "In which memory a String is stored, when we create a string using new operator?",
          answers: [
            {
              text: "Stack",
              correct: false,
            },
            {
              text: "String memory",
              correct: false,
            },
            {
              text: "Heap memory",
              correct: true,
            },
            {
              text: "Random storage space",
              correct: false,
            },
          ],
        },
        {
          id: 19,
          question: " In C language, FILE is of which data type?",
          answers: [
            {
              text: "int",
              correct: false,
            },
            {
              text: "char *",
              correct: false,
            },
            {
              text: "struct",
              correct: true,
            },
            {
              text: "None of the mentioned",
              correct: false,
            },
          ],
        },
        {
          id: 20,
          question: "Which of the following is correctly evaluated for pow(x,y,z) function?",
          answers: [
            {
              text: "(x**y) % z",
              correct: true,
            },
            {
              text: "(x / y) * z",
              correct: false,
            },
            {
              text: "(x**y) / z",
              correct: false,
            },
            {
              text: "(x / y) / z",
              correct: false,
            },
          ],
        },
        {
          id: 21,
          question: "Which of the following is true about inheritance in Java. 1) In Java all classes inherit from the Object class directly or indirectly. The Object class is root of all classes. 2) Multiple inheritance is not allowed in Java. 3) Unlike C++, there is nothing like type of inheritance in Java where we can specify whether the inheritance is protected, public or private.",
          answers: [
            {
              text: "1, 2 and 3",
              correct: true,
            },
            {
              text: "1 and 2",
              correct: false,
            },
            {
              text: "2 and 3",
              correct: false,
            },
            {
              text: "1 and 3",
              correct: false,
            },
          ],
        },
        {
          id: 22,
          question: "Which one of the following syntaxes is the correct syntax to read from a simple text file stored in ''d:\java.txt''?",
          answers: [
            {
              text: "Infile = open(''d:\\java.txt'', ''r'')",
              correct: true,
            },
            {
              text: "Infile = open(file=''d:\\\java.txt'', ''r'')",
              correct: false,
            },
            {
              text: "Infile = open(''d:\java.txt'',''r''",
              correct: false,
            },
            {
              text: "Infile = open.file(''d:\\java.txt'',''r'')",
              correct: false,
            },
          ],
        },
        {
          id: 23,
          question: "In C++, for what purpose the rank() is used?",
          answers: [
            {
              text: "It returns the size of each dimension",
              correct: false,
            },
            {
              text: "It returns the maximum number of elements that can be stored in the array",
              correct: false,
            },
            {
              text: "It returns the dimension of the specified array",
              correct: true,
            },
            {
              text: "None of the above mentioned",
              correct: false,
            },
          ],
        },
        {
          id: 24,
          question: "Evaluate the following (++z + y - y + z + x++) Java expression, if x=3, y=5, and z=10:",
          answers: [
            {
              text: "19",
              correct: false,
            },
            {
              text: "23",
              correct: false,
            },
            {
              text: "20",
              correct: false,
            },
            {
              text: "25",
              correct: true,
            },
          ],
        },
        {
          id: 25,
          question: "Which of the following is a mutable class in java?",
          answers: [
            {
              text: "java.lang.String",
              correct: false,
            },
            {
              text: "java.lang.Byte",
              correct: false,
            },
            {
              text: "java.lang.Short",
              correct: false,
            },
            {
              text: "java.lang.StringBuilder",
              correct: true,
            },
          ],
        },
        {
          id: 26,
          question: "Which of the following can be considered as the object of an array?",
          answers: [
            {
              text: "Index of an array",
              correct: false,
            },
            {
              text: "Elements of the Array",
              correct: true,
            },
            {
              text: "Functions of the Array",
              correct: false,
            },
            {
              text: "All of the above",
              correct: true,
            },
          ],
        },
        {
          id: 27,
          question: "The output to execute string.ascii_letters can also be obtained from:?",
          answers: [
            {
              text: "character",
              correct: false,
            },
            {
              text: "ascii_lowercase_string.digits",
              correct: false,
            },
            {
              text: "lowercase_string.upercase",
              correct: false,
            },
            {
              text: "ascii_lowercase+string.ascii_upercase",
              correct: true,
            },
          ],
        },
        {
          id: 28,
          question: "The maximum combined length of the command-line arguments as well as the spaces between adjacent arguments is – a) 120 characters, b) 56 characters, c) Vary from one OS to another",
          answers: [
            {
              text: "a",
              correct: false,
            },
            {
              text: "a, b",
              correct: false,
            },
            {
              text: "a, b, c",
              correct: false,
            },
            {
              text: "c",
              correct: true,
            },
          ],
        },
        {
          id: 29,
          question: "What is required in each C program?",
          answers: [
            {
              text: "The program must have at least one function.",
              correct: true,
            },
            {
              text: "The program does not require any function.",
              correct: false,
            },
            {
              text: "Input data",
              correct: false,
            },
            {
              text: "Output data",
              correct: false,
            },
          ],
        },
        {
          id: 30,
          question: "Which of the following can be considered as the correct syntax for declaring an array of pointers of integers that has a size of 10 in C++?",
          answers: [
            {
              text: "int arr = new int[10];",
              correct: false,
            },
            {
              text: "int *arr = new int*[10]",
              correct: false,
            },
            {
              text: "int **arr = new int*[10];",
              correct: true,
            },
            {
              text: "int *arr = new int[10];",
              correct: false,
            },
          ],
        },
    ];

    const moneyPyramid = useMemo(() =>
        [
            {id:1, amount:"$ 10"},
            {id:2, amount:"$ 20"},
            {id:3, amount:"$ 30"},
            {id:4, amount:"$ 50"},
            {id:5, amount:"$ 100"},
            {id:6, amount:"$ 200"},
            {id:7, amount:"$ 400"},
            {id:8, amount:"$ 800"},
            {id:9, amount:"$ 1600"},
            {id:10, amount:"$ 3200"},
            {id:11, amount:"$ 6400"},
            {id:12, amount:"$ 12500"},
            {id:13, amount:"$ 25000"},
            {id:14, amount:"$ 50000"},
            {id:15, amount:"$ 100000"},
            {id:16, amount:"$ 200000"},
            {id:17, amount:"$ 400000"},
            {id:18, amount:"$ 500000"},
            {id:19, amount:"$ 600000"},
            {id:20, amount:"$ 700000"},
            {id:21, amount:"$ 800000"},
            {id:22, amount:"$ 900000"},
            {id:23, amount:"$ 1000000"},
            {id:24, amount:"$ 2000000"},
            {id:25, amount:"$ 3000000"},
            {id:26, amount:"$ 4000000"},
            {id:27, amount:"$ 5000000"},
            {id:28, amount:"$ 6000000"},
            {id:29, amount:"$ 7000000"},
            {id:30, amount:"$ 8000000"},
        ],
     []
     );

    useEffect(() => {
        questionNumber > 1 && 
        setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
    }, [moneyPyramid, questionNumber])

    return (
        <div className="test">
            <div className="main">
                {stop ? <h1 className="earnedText">You earned : {earned}</h1> : (
                    <>
                     <div className="top">
                     <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
                 </div>
                 <div className="bottom">
                     <Trivia
                      data={data}
                      setStop={setStop}
                      questionNumber={questionNumber}
                      setQuestionNumber={setQuestionNumber}
                      />
                      </div> 
                      </>
                )}
            </div>
            <div className="pyramid">
        <h3 className = {section === "easy"? "sectionHeading active": "sectionHeading"}>Quiz</h3>
        <ul className= "moneyList">
          {moneyPyramid.map((m) =>(
          <li className={section === "easy"? (questionNumber === m.id? "moneyListItem active" : "moneyListItem") : "moneyListItem" }>
              <span className="moneyListItemNum">{m.id}</span>
              {/* <span className= "moneyListItemAmount">{m.amount}</span> */}
          </li>
          ))}
        </ul>
            </div>
        </div>
    )
}

export default Test