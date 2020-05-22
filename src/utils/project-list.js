const img1 = require('./project1.png')
const img2 = require('./project2.png')
const img3 = require('./project3.png')
let project_list = [
	{
		image: img1,
		title: 'Agricom(Kisan-Junction)',
		des:
			"It is as F2B (Farmer to business) online platform where farmers can purchase seeds and pesticides and parallel with that farmers can sell their grains through this platform. The website has one section where sellers can sell their farming related products. Farmers can see the latest blog related to agriculture.",
		tags: ['React', 'Redux', 'Node Js', 'Mongodb'],
		links: {
			launch: 'http://attainu-agricom.herokuapp.com/',
			github: 'https://github.com/attainu/Salman-Sitanshu-Kissan-Junction-au4'
		}
	},
	{
		image: img2,
		title: 'Red.Com (E-Commerce Website)',
		des:
			"Red.com is a mvp of an eCommerce website, which are having multiple feature. There, users can register himself/herself and along with that they can place orders. The seller can sell their products through this platform.",
		tags: ['HTML', 'Express', 'Node Js', 'MondoDb',],
		links: {
			launch: 'http://eagle-ecommerce-app.herokuapp.com/',
			github: 'https://github.com/attainu/eagle-psychic-chainsaw'
		}
	},
	{  /* -------------------------------- */
		image: img3,
		title: 'Sensor Node Programming And Simulation',
		des:
			"Designed path localization algorithm for underwater wireless sensor networking system so as to find the location of all neighbouring nodes.",
		tags: ['C++', 'Network Simulator 2'],
		links: {

			github: 'https://github.com/attainu/eagle-psychic-chainsaw'
		}
	},



];

export default project_list;
