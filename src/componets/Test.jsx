import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import axios from 'axios';
import { Link } from 'react-router-dom'

const Test = () => {
  const [quiz, setQuiz] = useState([]);
  const [all, setAll] = useState([]);
  const [CorrAnswer, setCorrAnswer] = useState([]);
  const [inn, setInn] = useState([]);
  const [Hv, setHv] = useState(null);
  const [Hv2, setHv2] = useState(null);
  const [answer, setAnswer] = useState([]);
  const location = useLocation()
  console.log(quiz, 'quiz');
  console.log(answer, 'answers');

  const getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(answer.length));
  }

  function val(mas, inn) {
    setQuiz(mas)
    setHv(inn)
    setInn(inn)
    setHv2(null)

    const two = all[inn].incorrect_answers


    if (all[inn].incorrect_answers.length < 4) {
      two.splice(getRandomInt(all[inn].incorrect_answers), 0, all[inn].correct_answer)
      console.log(two);
      setAnswer(two)
    } else {
      setAnswer(all[inn].incorrect_answers)
    }

  }



  useEffect(() => {
    axios.get(`https://opentdb.com/api.php?amount=${location.state.KEY.num}&category=${location.state.KEY.cat}`)
      .then(res => {
        setAll(res.data.results)
      })


  }, []);
  // console.log(all);

  let son = 0
  function h3_selected(selected, item) {
    let currA = [...CorrAnswer]
    setHv2(selected)
    if (all[inn].correct_answer === item) {
      currA.push(answer[selected])
    }
    setCorrAnswer(currA)

  }
  console.log(CorrAnswer, "aaa");



  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container ">
          <Link className="navbar-brand" to="/main">FinalExam</Link>
          <h1>{inn + 1}</h1>
          <div className=" flex-grow-0" >
            {
              (all.length > 0) && <form action="https://formspree.io/f/xzbwblpb"
                method="POST">
                <label>
                  <input className='form-control mx-2 shadow' type="O'quvchining ismi" name="text" placeholder='Name...' />
                </label>
                <label className='d-none'>
                  {
                    (CorrAnswer.length > 0)  && CorrAnswer.map((item, index) => {
                      return(
                        <textarea className='d-none' name="O'quvchining bali">{index + " => " + item || "0"}</textarea>
                      )
                    })
                  }
              
                </label>
                <button className="btn btn-danger shadow mx-3" type="submit">Finish</button>
              </form>
            }

          </div>
        </div>
      </nav>

      <div className=' container d-flex flex-wrap justify-content-center mt-5 sall'>
        {
          (all.length > 0) && all.map((item, index) => {
            return (
              <div className='cards_subtitle ' key={index}>
                <p className={`card_num ${Hv === index && 'card_hv'} `} onClick={() => val(item, index)}>{index + 1}</p>
              </div>
            )
          })
        }
      </div>
      <div className='container mt-5 sal '>
        <div className=' border'>
          <h3 className='px-2 py-2 border-bottom bg-light'>{quiz.question}</h3>
          {
            (answer) && answer.map((item, indx) => {
              return (
                <>
                  <h3 onClick={() => h3_selected(indx, item)} className={`px-2 py-2 card_h ${Hv2 === indx && 'card_hv2'}`} key={indx}>{item}</h3>
                </>
              )
            })
          }


        </div>
      </div>
    </div>
  );
}

export default Test;
