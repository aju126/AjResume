class About

	def about_me
		'I have 7+ years of experience in Software development experience as a full-stack developer. Started my career as a J2ME and Blackberry developer I was responsible for developing consumer applications at a startup. I also invested time and effort in developing skills required to build Android and iPhone/iPad application. Currently exploring the web technologies such as rails and reactJS.
As a developer, I enjoy all the challenges this industry offers such as delivery, technology, innovation, leadership and learning something everyday.
My objective is to help make the best of class software products in the world and win customer affection for making a real difference.'
	end

	def skill
		[{tech: "Ruby On Rails", value: "85"}, 
			{ tech: "IOS/ Iphone Development", value: "75" }, 
			{ tech: "React", value: "50" },
			{ tech: "Sql", value: "70" },
			{ tech: "GIT", value: "70" },
			{ tech: "HTML5 / CSS 3", value: "50" },
			{ tech: "Swift / Objective C", value: "60" },
			{ tech: "Android", value: "40" },
			{ tech: "React Native", value: "50" },
			{ tech: "Javascript", value: "50" }]
	end

	def hash_value 
		{about: about_me, skill: skill}
	end
end