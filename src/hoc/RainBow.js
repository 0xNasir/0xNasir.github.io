import React from 'react'
const RainBow = (WrappedComponent)=>{
	const colors=['red','yellow','blue','green', 'pink', 'magenta'];
	const randomColor=colors[Math.floor(Math.random()*5)];
	const colorName=randomColor + '-text';
	return (props) =>{
		return (
			<div className={colorName}>
			<WrappedComponent {...props} />
			</div>
		)
	}
}
export default RainBow