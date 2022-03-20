import React, {useState} from 'react'
import Info from "./component/Info"
import MyHobbies from "./component/MyHobbies"
import MyWorkExperience from "./component/MyWorkExperience"
import MyEducation from "./component/MyEducation"
import Contact from "./component/Contact"

const App = () => {

	const [hobbies, setHobbies] = useState(['Компьютерные игры', 'Спорт', 'Книги', 'Программирование'])
	const [workExperience, setWorkExperience] = useState([
		{
			company: 'Synergy group',
			position: 'Официант',
			term: '2020 - now',
		},
		{
			company: 'WSC Formula',
			position: 'Фитнес тренер',
			term: '2018 - 2019',

		},
		{
			company: 'Fitness club Storm, Фитнес система "Высшая лига"',
			position: 'Фитнес тренер',
			term: '2017 - 2018',
		},
	])
	const [education, setEducation] = useState([
		{
			institution: 'Международный Гуманитарный Университет',
			faculty: 'Факультет менеджмента и маркетинга',
			speciality: 'Специальность компьютерная инженерия',
			degree: 'Бакалавр'
		},
		{
			institution: 'Економико-правовой колледж',
			faculty: 'Факультет информационных технологий',
			speciality: 'Специальность обслуживание компьютерных систем и сетей',
			degree: 'Младший специалист'
		},
		{
			institution: 'Hillel IT school',
			faculty: 'Курс Front-end Pro',
			speciality: 'Специализация JavaScript',
			degree: 'Front-end developer'
		},
	])

	return (
		<div className='container'>
			<Info/>
			<MyHobbies setHobbies={setHobbies} hobbies={hobbies}/>
			<MyWorkExperience arr={workExperience} setWorkExperience={setWorkExperience}/>
			<MyEducation arr={education} setEducation={setEducation}/>
			<Contact/>
		</div>
	)
}

export default App