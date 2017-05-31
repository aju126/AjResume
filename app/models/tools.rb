class Tools

	def logos
		[ {logo: "git_logo.png"},
			{logo: "xcode_logo.png"},
			{logo: "rubymine_logo.jpg"},
		  {logo: "rspec_logo.png"},
		  {logo: "eclipse_logo.png"},
			{logo: "docker_logo.jpg"},
			{logo: "jira_logo.jpg"},
			{logo: "microservice_logo.gif"}]
	end

	def quote
		{quote: "\"Everyday life is like programming, I guess. If you love something you can put beauty into it\".", cort: "Donald Knuth"}
	end

	def hash_value 
		{logos: logos, quote: quote}
	end
end