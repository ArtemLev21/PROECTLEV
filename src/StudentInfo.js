import React from 'react';

class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      surname: 'Бігун',
      name: 'Владислав',
      direction: 'Front-end розробка',
      certification: 'Сертифікація веб-розробника',
      argumentation: 'Я обираю сертифікацію веб-розробника, оскільки бажаю спеціалізуватися на фронтенді. Ця сертифікація дозволить мені поглибити свої знання з HTML, CSS і JavaScript, а також вивчити сучасні фреймворки та інструменти для розробки веб-інтерфейсів. Я вважаю, що ця сертифікація важлива для мого професійного розвитку, оскільки фронтенд розробка високо востребована на ринку праці і вона дозволить мені отримати більше можливостей в цій галузі.',
    };
  }

  render() {
    return (
      <div className="container">
        <h1>Моя сторінка</h1>
        <p>Прізвище, ім'я: {this.state.surname} {this.state.name}</p>
        <p>Напрямок розвитку: {this.state.direction}</p>
        <p>Персональна сертифікація: {this.state.certification}</p>
        <p>Аргументація: {this.state.argumentation}</p>
      </div>
    );
  }
}

export default StudentInfo;
