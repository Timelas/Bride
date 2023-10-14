import React, {useState, useRef} from "react";
import question from "../../images/questions.svg";
import "./Questions.css";

function Questions() {
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzHZZ3nhu2Ts-KTEtJwPTJeltcfZnI7TNCapC-yZZq9xxhJe1iowN8djPsbZ6T7v6vH/exec"
  const [loading, setLoading] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(true);
  const [isSubmitChange, setIsSubmitChange] = useState(true);

  function renderSubmitNo () {
    setIsSubmitChange(false)
  }

  function renderSubmitYes() {
    setIsSubmitChange(true)
  }

  const handleSubmitNo = (e) =>{
    e.preventDefault()
    setLoading(true)
    const FormNew = new FormData(formRef.current);
    FormNew.append('Form', 'rsvp-no');

    fetch(scriptUrl, {
    method: 'POST',
    body: FormNew,

}).then(res => {
        setLoading(false);
        setIsFormVisible(false);
    })
    .catch(err => console.log(err))
}
  
  const handleSubmitYes = (e) =>{
      e.preventDefault()
      setLoading(true)
      const FormNew = new FormData(formRef.current);
      FormNew.append('Form', 'rsvp-yes');

      fetch(scriptUrl, {
      method: 'POST',
      body: FormNew,

  }).then(res => {
          setLoading(false);
          setIsFormVisible(false);
      })
      .catch(err => console.log(err))
  }
  
  return (
    <section className="question" id="questions">
      <div className="question__bloks">
        { isFormVisible ?
          <div className="question__container">
            <form className="question__form" ref={formRef} onSubmit={isSubmitChange ? handleSubmitYes : handleSubmitNo}>
            <p className="question__string question__string-names">
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input question__input-names" minLength={2}></input>
            </p>
            <div className="question__buttons">
              <button type="submit" name="Принято" className="question__button" onClick={renderSubmitYes} disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
            </div>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text question__text-answer">Марата, 1/71, 3-ий этаж</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;