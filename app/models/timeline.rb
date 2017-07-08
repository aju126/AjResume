class Timeline

	def company_1
		{ name: "Divum Corporate Services Pvt Ltd", 
			designation: "Application Developer",
			duration: "2010-2011",
			projects:[
				{title: "CNN IBN on blackberry",
				description: "Working as an individual team member, news Application was developed for a giant Indian news channel.",
				skills: "RIM Apis",
				platform: "Blackberry"},

				{title: "My first application on blackberry",
				description: "A social networking app similar to twitter on blackberry, supporting touch and non touch devices.",
				skills: "RIM Apis",
				platform: "Blackberry"}
			]
		}
	end

	def company_2
		{ name: "mPortal wireless solutions Pvt Ltd", 
			designation: "Software Engineer",
			duration: "2011-2014",
			projects:[
				{title: "ScreenBee",
				description: "ScreenBee is your social television experience (for US-based television content). It helps in finding out what shows are currently airing, new shows based on friends like, search for favorites, 
				finding out what shows you and your friends have in common, buzzing about shows in private chats with your friends, and tweeting. We can also discover more about favorite shows such as
				episodes, cast, official and fan tweets..",
				skills: "FB and Twitter Integration, UIKit, APNS",
				platform: "iPad"},

				{title: "Oscars 2013 (official app for disney)",
				description: "Worked with a 8 member team to develop a iPhone/iPad app supporting IOS 5.0 and IOS 6 for
				Oscars 2013, the app includes features like: photos, videos, social integration. Most of the
				features are server driven.",
				skills: "FB and Twitter Integration, UIKit, APNS, HTML Video player",
				platform: "iPhone & iPad"},

				{title: "XfinityConnect",
				description: "Working with a 10 member team to develop a unique iPhone/ipad Application with a 2 million
				user base. The app is for cable company subscribers to help them keep track of their emails,
				Voice mails, Plaxo Address book and Text messages.",
				skills: "Plaxo Apis, IOS UI Guidelines, Design Patterns, Memory Management.",
				platform: "iPhone & iPad"},

				{title: "App Mall (Android and Blackberry app similar to android play store)",
				description: "Working with a 3 member team to develop a App similar to android market on android and Blackberry
				phones for a US based network carrier.",
				skills: "Android Apis",
				platform: "Android"}
			]
		}
	end

	def company_3
		{ name: "Cerner Healthcare", 
			designation: "Senior Software Engineer",
			duration: "2014-Present",
			projects:[
				{title: "Nursing application",
				description: "An Enterprise iphone application which will be used by nurses to retrieve demographic information for a patient, associate devices and scan patient barcode to load patient data.",
				platform: "iPhone & iPad",
				skills: "AFNetworking, UIKit, Obj-c, Storyboards, Autolayout, Barcode Scanner api, OCMock, HIPAA"},

				{title: "Configuration Manager",
				description: "A Web application which manages the feature roll out in other applications which consumes these services.",
				platform: "Ruby on Rails",
				skills: "Rails Engines & Gems, Activerecords, Associations, Callbacks, Validations, Rake, Rspec, Capybara, JQuery, Microservice, MySQL, Chef"},

				{title: "Application Access",
				description: "A Web application which controlls the users authorizations on different clinical application",
				platform: "Ruby on Rails",
				skills: "Redis, CSS Satellites, Unified UI, Cloud Sessions, Open ID"}
			
			]
		}
	end

	def hash_value 
		{name: [company_3, company_2, company_1]}
	end
end