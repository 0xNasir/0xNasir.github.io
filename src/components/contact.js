import React from 'react'
const Contact= (props) =>{
	setTimeout(()=>{
		props.history.push('/about')
	},2000);
	return (
		<div className="container">
		<h4 className="center">Contact</h4>
		<h5 className="center">Redirect to about page after 2 second</h5> 
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores voluptates soluta impedit culpa expedita sed quod harum reiciendis, sint laudantium sit aspernatur similique eaque optio ipsum accusantium, tempora nobis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore eos, in ad atque tempore necessitatibus hic mollitia numquam odio quas molestias ducimus quisquam alias amet sunt fuga ex neque vitae?</p>
		</div>
	)
}
export default Contact