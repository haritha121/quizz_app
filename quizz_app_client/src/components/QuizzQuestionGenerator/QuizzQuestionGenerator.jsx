import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import "./QuizzQuestionGenerator.css";
import Dialog from "../Dialog/Dailog";
import axios from "axios";
import Toast from "../Toast/Toast";

const CreateQuiz = () => {
  const navigate = useNavigate();
  const categories = [
    "Math",
    "Science",
    "Technology",
    "Sports",
    "History",
    "Misc",
  ];
  const [categoryVal, setCategoryVal] = useState("Math");
  const [mustBeSignedIn, setMustBeSignedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [name, setName] = useState("");
  const [addQuestion, setAddQuestion] = useState(false);
  const [questionName, setQuestionName] = useState("");
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("JWT_PAYLOAD")) {
      navigate("/");
    }
  }, []);

  const selectPrivate = (e) => {
    setMustBeSignedIn(e.target.checked);
  };

  const addAnswer = () => {
    setAnswers([...answers, ""]);
  };

  const updateAnswer = (e, i) => {
    const newArr = [...answers];
    newArr[i] = e.target.value;
    setAnswers(newArr);
  };

  const saveQuestion = () => {
    const question = {
      answers,
      correctAnswer,
      questionName,
    };
    setQuestions([...questions, question]);
    setAddQuestion(false);
    setQuestionName("");
    setAnswers([]);
    setCorrectAnswer("");
  };

  const removeQuestion = (question) => {
    setQuestions((prevQuestions) =>
      prevQuestions.filter(
        (ques) => ques.questionName !== question.questionName
      )
    );
  };

  const saveQuiz = () => {
    const quiz = {
      mustBeSignedIn,
      name,
      questions,
      category: categoryVal,
      imgUrl,
    };
    axios
      .post("/api/quizzes/create", {
        quiz,
        createdBy: localStorage.getItem("_ID"),
      })
      .then((res) => {
        if (res.data.success) {
          setQuestions([]);
          setAnswers([]);
          setCategoryVal("Math");
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="quizz-generator-wrapper">
      <Toast model={showToast} message="Quiz Created" />
      <div>
        <Sidebar />
      </div>

      <div className="main">
        <div className="header">Create Quiz</div>
        <div className="form card">
          <input
            className="input"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Quiz Name"
          />
          <br />
          <input
            className="input"
            onChange={(e) => setImgUrl(e.target.value)}
            value={imgUrl}
            placeholder="Img url"
          />
          <br />
          <select
            value={categoryVal}
            onChange={(e) => setCategoryVal(e.target.value)}
            className="input select"
            placeholder="Category"
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="checkbox">
            <span>Must be logged in to take</span>
            <input
              checked={mustBeSignedIn}
              onChange={selectPrivate}
              type="checkbox"
              placeholder="Must be logged in to take"
            />
          </div>

          {questions.map((ques, idx) => (
            <div className="question" key={idx}>
              <div>{ques.questionName}</div>
              <div>Correct Answer: {ques.correctAnswer}</div>
              <div>Num of answers: {ques.answers.length}</div>
              <span className="btn delete" onClick={() => removeQuestion(ques)}>
                Delete
              </span>
            </div>
          ))}

          <div className="questions">
            <div className="add-question" onClick={() => setAddQuestion(true)}>
              Add Question
            </div>
          </div>

          <span onClick={saveQuiz} className="btn save-quiz">
            Save Quiz
          </span>

          <Dialog model={addQuestion}>
            <div className="new-question-form">
              <div>Question</div>
              <input
                className="input"
                placeholder="Question"
                value={questionName}
                onChange={(e) => setQuestionName(e.target.value)}
              />
              <div>Options</div>
              {answers.map((ans, idx) => (
                <div
                  className="answer-form"
                  key={idx}
                  style={{ display: "flex" }}
                >
                  <input
                    type="radio"
                    value={ans}
                    onChange={(e) => setCorrectAnswer(ans)}
                    name="answer"
                  />
                  {"  "}
                  <input
                    className="input"
                    type="text"
                    placeholder="Option Value"
                    value={answers[idx]}
                    onChange={(e) => updateAnswer(e, idx)}
                  />
                </div>
              ))}
              <div className="add-answer" onClick={addAnswer}>
                Add an Answer
              </div>
              <div className="btn-wrapper">
                <div className="btn" onClick={() => setAddQuestion(false)}>
                  Close
                </div>
                <div className="btn" onClick={saveQuestion}>
                  Save
                </div>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CreateQuiz;
