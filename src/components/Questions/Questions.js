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
            <img src={question} alt="опрос" className="question__header"></ img>
            <p className="question__text">Пожалуйста, подтвердите ваше присутствие на празднике до 2 июля 2023 года любым удобным для вас способом или заполните форму ниже.<br/>Чтобы все прошло идеально и этот вечер запомнился надолго, пожалуйста, ответьте на несколько вопросов:</p>
            <form className="question__form" ref={formRef} onSubmit={isSubmitChange ? handleSubmitYes : handleSubmitNo}>
            <p className="question__string question__string-names">
              <label htmlFor="who" className="question__label-input question__label-input-names">Имя и фамилия:</label>
              <input type="text" name="Имя и Фамилия" id="who" required className="question__input question__input-names" minLength={2}></input>
            </p>
            <p className="question__string">
              <label htmlFor="eat" className="question__label-input">Предпочтение по еде:</label>
              <input type="text" name="Предпочтение по еде" id="eat" required className="question__input"></input>
            </p>
            <p className="question__string">
              <label htmlFor="alco" className="question__label-input">Предпочтение по напиткам:</label>
              <input type="text" name="Предпочтение по напиткам" id="alco" required className="question__input"></input>
            </p>
            <p className="question__string">
              <label htmlFor="other" className="question__label-input">Иное/есть аллергия:</label>
              <input type="text" name="Иное/есть аллергия" id="other" required className="question__input"></input>
            </p>
            <div className="question__buttons">
              <button type="submit" name="Принято" className="question__button" onClick={renderSubmitYes} disabled={loading ? true : false}>{loading ? "Отправка..." : "Подтвердить"}</button>
              <button type="submit" name="Отклонено" className="question__button" onClick={renderSubmitNo} disabled={loading ? true : false}>{loading ? "Отправка..." : "Отклонить"}</button>
            </div>
          </form> 
        </div>
        :
        <div>
          <img src={question} alt="опрос" className="question__header"></ img>
          <p className="question__text question__text-answer">Форма отправлена!</p>
        </div>
        }
      </div>
    </section>
  );
}

export default Questions;