import React from 'react'

const Hook2 = () => {
// array of object
	const peopleArray = [
		{ id: 'p1', name: 'Alice', age: 20 },
		{ id: 'p2', name: 'Bob', age: 25 }
	]
// object of objects
	const peopleObject = {
		p1: { id: 'p1', name: 'Cara', age: 30 },
		p2: { id: 'p2', name: 'Dan', age: 35 }
	}

	// Iterate WITHOUT list rendering (build simple strings via .map)
	// let arrayKeysJoined = peopleArray
	// 	.map((person) => Object.keys(person).join(', '))
	// 	.join(' | ')

	// let arrayValuesJoined = peopleArray
	// 	.map((person) => Object.values(person).join(', '))
	// 	.join(' | ')

	// const objectTopKeysJoined = Object.keys(peopleObject).join(', ')
	// let objectInnerValuesJoined = Object.keys(peopleObject)
	// 	.map((key) => Object.values(peopleObject[key]).join(', '))
	// 	.join(' | ')

	// Iterate WITH list rendering (using React.Fragment like the example)
	const arrRendered = peopleArray.map((item) => {
		return (
			<React.Fragment key={item.id}>
				<p>{JSON.stringify(item)}</p>
				<ul>
					{Object.entries(item).map(([k, v]) => {
						return (
							<li key={k}>
								{k}-{v}
							</li>
						)
					})}
				</ul>
			</React.Fragment>
		)
	})

	const objRendered = Object.entries(peopleObject).map(([outerKey, obj]) => {
		return (
			<React.Fragment key={outerKey}>
				<p>{outerKey}: {JSON.stringify(obj)}</p>
				<ul>
					{Object.entries(obj).map(([k, v]) => {
						return (
							<li key={k}>
								{k}-{v}
							</li>
						)
					})}
				</ul>
			</React.Fragment>
		)
	})

	return (
		<div style={{ padding: 16 }}>
			<h2>Hook2: Keys & Values Iteration</h2>

			<h3>Array of Objects</h3>
			<p><b>Data:</b> [{peopleArray.map(p => `{id:${p.id}, name:${p.name}, age:${p.age}}`).join(' , ')}]</p>

			<h4>Without List Rendering</h4>
			<p><b>Keys joined:</b> {arrayKeysJoined}</p>
			<p><b>Values joined:</b> {arrayValuesJoined}</p>

			<h4>With List Rendering (Fragments + entries)</h4>
			<div>{arrRendered}</div>

			<h3>Object of Objects</h3>
			<p><b>Top keys:</b> {Object.keys(peopleObject).join(', ')} → inner objects with id, name, age</p>

			<h4>Without List Rendering</h4>
			<p><b>Top-level keys:</b> {objectTopKeysJoined}</p>
			<p><b>Inner values joined:</b> {objectInnerValuesJoined}</p>

			<h4>With List Rendering (Fragments + entries)</h4>
			<div>{objRendered}</div>

			

			
		</div>
	)
}

export default Hook2

