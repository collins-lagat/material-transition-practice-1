import velocity from 'velocity-animate'

const blogs = [
	{
		title: 'My Title 1',
		photo: 'https://picsum.photos/id/237/5000/3000',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus neque, at bibendum odio facilisis a. Cras nec nisi justo. Donec luctus, magna in tincidunt venenatis, lectus dolor volutpat urna, eget sodales felis sapien ut velit. Sed id pharetra turpis. In bibendum neque et auctor posuere. Sed tristique leo at ultrices pulvinar. Morbi sed diam volutpat, interdum libero non, commodo eros.'
	},
	{
		title: 'My Title 2',
		photo: 'https://picsum.photos/id/1011/5000/3000',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus neque, at bibendum odio facilisis a. Cras nec nisi justo. Donec luctus, magna in tincidunt venenatis, lectus dolor volutpat urna, eget sodales felis sapien ut velit. Sed id pharetra turpis. In bibendum neque et auctor posuere. Sed tristique leo at ultrices pulvinar. Morbi sed diam volutpat, interdum libero non, commodo eros.'
	},
	{
		title: 'My Title 3',
		photo: 'https://picsum.photos/id/870/4000/2500',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim purus neque, at bibendum odio facilisis a. Cras nec nisi justo. Donec luctus, magna in tincidunt venenatis, lectus dolor volutpat urna, eget sodales felis sapien ut velit. Sed id pharetra turpis. In bibendum neque et auctor posuere. Sed tristique leo at ultrices pulvinar. Morbi sed diam volutpat, interdum libero non, commodo eros.'
	}
]

const container = document.querySelector('#blogs')

const openBlog = e => {
	const { target } = e
	const { parentNode } = target.parentNode
	parentNode.classList.remove('static')
	parentNode.classList.add('fixed')
	parentNode.classList.add('fixed')
	parentNode.classList.add('flex-col')
	parentNode.classList.add('items-center')
	const [imgNode, titleNode, paraNode] = parentNode.childNodes
	const [title] = titleNode.childNodes

	velocity(
		parentNode,
		{
			width: '100vw',
			height: '100vh',
			backgroundColor: '#ffffff'
		},
		{
			easing: [0.4, 0.0, 0.2, 1]
		}
	)
	velocity(
		imgNode,
		{
			width: '70%'
		},
		{
			easing: [0.4, 0.0, 0.2, 1]
		}
	)
	velocity(
		title,
		{
			fontSize: '6rem'
		},
		{
			easing: [0.4, 0.0, 0.2, 1]
		}
	)
	velocity(
		paraNode,
		{
			display: 'flex',
			opacity: [1, 0.9]
		},
		{
			easing: [0.4, 0.0, 0.2, 1],
			delay: 200
		}
	)
}

document.addEventListener('DOMContentLoaded', e => {
	blogs.forEach(blog => {
		// Parent Div
		const div = document.createElement('div')
		div.classList.add('w-1/2')
		div.classList.add('flex')
		div.classList.add('my-6')
		div.classList.add('cursor-pointer')
		div.classList.add('opacity-0')
		div.classList.add('overflow-y-auto')
		div.addEventListener('click', openBlog)
		// Child Div: Image
		const div2 = document.createElement('div')
		div2.classList.add('w-1/3')
		div2.classList.add('flex')
		// Image
		const img = document.createElement('img')
		img.classList.add('w-full')
		img.classList.add('rounded-lg')
		img.src = blog.photo
		div2.appendChild(img)
		// Child Div: Title
		const div3 = document.createElement('div')
		div3.classList.add('w-2/3')
		div3.classList.add('flex')
		// Title
		const h1 = document.createElement('h1')
		h1.innerText = blog.title
		h1.classList.add('text-3xl')
		div3.appendChild(h1)
		// Child Div: Paragraph
		const div4 = document.createElement('div')
		div4.classList.add('w-2/3')
		div4.classList.add('flex')
		div4.classList.add('hidden')
		// Paragraph
		const paragraph = document.createElement('p')
		paragraph.innerText = blog.text
		paragraph.classList.add('w-full')
		paragraph.classList.add('text-lg')
		div4.appendChild(paragraph)
		// Append children to main Div
		div.appendChild(div2)
		div.appendChild(div3)
		div.appendChild(div4)
		// Append main div to container
		container.appendChild(div)
		velocity(
			div,
			{ opacity: [1, 0] },
			{
				easing: [0.4, 0.0, 0.2, 1],
				delay: 100
			}
		)
	})
})
