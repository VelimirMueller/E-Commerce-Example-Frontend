const SHOP_DATA = {
	fractals: {
		id: 1,
		title: 'Fractal Art',
		routeName: 'fractals',
		items: [
			{
				id: 1,
				name: 'fract1',
				shortName: 'fr1',
				imageUrl: 'https://images.unsplash.com/photo-1608501857571-31a43311e342?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
				price: 299
			},
			{
				id: 2,
				name: 'fract2',
				shortName: 'fr2',
				imageUrl: 'https://images.unsplash.com/photo-1604871000636-074fa5117945?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
				price: 191
			},
			{
				id: 3,
				name: 'fract3',
				shortName: 'fr3',
				imageUrl: 'https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
				price: 499
			},
			{
				id: 4,
				name: 'fract4',
				shortName: 'fr4',
				imageUrl: 'https://images.unsplash.com/photo-1607457597191-8ed4e870ceca?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
				price: 177
			},
			{
				id: 5,
				name: 'fract5',
				shortName: 'fr5',
				imageUrl: 'https://images.unsplash.com/photo-1607893326676-5c46ba36251f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
				price: 425
			}
		]
	},

	classics: {
		id: 2,
		title: 'Classic Art',
		routeName: 'classics',
		items:[
			{
				id: 6,
				name: 'classic1',
				shortName: 'cl1',
				imageUrl: 'https://images.unsplash.com/photo-1576503918360-4f474bde662a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=918&q=80',
				price: 1499
			},
			{
				id: 7,
				name: 'classic2',
				shortName: 'cl2',
				imageUrl: 'https://images.unsplash.com/photo-1578321926534-133bb2a9f080?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80',
				price: 1199
			},
			{
				id: 8,
				name: 'classic3',
				shortName: 'cl3',
				imageUrl: 'https://images.unsplash.com/photo-1582561833407-b95380302a43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=992&q=80',
				price: 645
			},
			{
				id: 9,
				name: 'classic4',
				shortName: 'cl4',
				imageUrl: 'https://images.unsplash.com/photo-1583590019972-a146a712d72a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=949&q=80',
				price: 2645
			},
			{
			id: 10,
				name: 'classic5',
				shortName: 'cl5',
				imageUrl: 'https://images.unsplash.com/photo-1583243535987-0cf3da658f43?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=903&q=80',
				price: 345
			},
		]
	},

	moderns: {
		id: 3,
		title: 'Modern Art',
		routeName: 'moderns',
		items:[
			{
				id: 11,
				name: 'modern1',
				shortName: 'md1',
				imageUrl: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80',
				price: 549
			},
			{
				id: 12,
				name: 'modern2',
				shortName: 'md2',
				imageUrl: 'https://images.unsplash.com/photo-1541512416146-3cf58d6b27cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=977&q=80',
				price: 1877
			},
			{
				id: 13,
				name: 'modern3',
				shortName: 'md3',
				imageUrl: 'https://images.unsplash.com/photo-1552943900-b64745537c47?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
				price: 999
			},
			{
				id: 14,
				name: 'modern4',
				shortName: 'md4',
				imageUrl: 'https://images.unsplash.com/photo-1516320654132-c3a74da4da5b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4MzY0NDcxfHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60',
				price: 777
			},
			{
				id: 15,
				name: 'modern5',
				shortName: 'md5',
				imageUrl: 'https://images.unsplash.com/photo-1526304760382-3591d3840148?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
				price: 7523
			},	
		]
	},

	landscapes: {
		id: 4,
		title: 'Landscape art',
		routeName: 'landscapes',
		items:[
			{
				id: 16,
				name: 'landscape1',
				shortName: 'ls1',
				imageUrl: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
				price: 549
			},
			{
				id: 17,
				name: 'landscape2',
				shortName: 'ls2',
				imageUrl: 'https://images.unsplash.com/photo-1476990789491-712b869b91a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=888&q=80',
				price: 17459
			},
			{
				id: 18,
				name: 'landscape3',
				shortName: 'ls3',
				imageUrl: 'https://images.unsplash.com/photo-1494873966129-5bb6ff0e975d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=817&q=80',
				price: 3699
			},
			{
				id: 19,
				name: 'landscape4',
				shortName: 'ls4',
				imageUrl: 'https://images.unsplash.com/photo-1585393049115-c32346ca85b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
				price: 199
			},
			{
				id: 20,
				name: 'landscape5',
				shortName: 'ls5',
				imageUrl: 'https://images.unsplash.com/photo-1445964047600-cdbdb873673d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzMzg2NDM5fHxlbnwwfHx8&auto=format&fit=crop&w=900&q=60',
				price: 2559
			},
		]
	},

	skylines: {
		id: 5,
		title: 'Skyline art',
		routeName: 'skylines',
		items:[
			{
				id: 21,
				name: 'skyline1',
				shortName: 'sl1',
				imageUrl: 'https://images.unsplash.com/photo-1589311741299-a230d76a586d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2t5bGluZSUyMG5pZ2h0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
				price: 499
			},
			{
				id: 22,
				name: 'skyline2',
				shortName: 'sl2',
				imageUrl: 'https://images.unsplash.com/photo-1542463873-e914d2e10f51?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eSUyMGF0JTIwbmlnaHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
				price: 299
			},
			{
				id: 23,
				name: 'skyline3',
				shortName: 'sl3',
				imageUrl: 'https://images.unsplash.com/photo-1494707633652-f43986561810?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=924&q=80',
				price: 399
			},
			{
				id: 24,
				name: 'skyline4',
				shortName: 'sl4',
				imageUrl: 'https://images.unsplash.com/photo-1598495886228-fedb44a5b5a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2t5bGluZSUyMG5pZ2h0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
				price: 99
			},
			{
				id: 25,
				name: 'skyline5',
				shortName: 'sl5',
				imageUrl: 'https://images.unsplash.com/photo-1528076225979-12893c7d55e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1199&q=80',
				price: 645
			}
		]
	}
};

export default  SHOP_DATA;