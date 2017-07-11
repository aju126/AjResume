class Tech

	def logos
		[ {logo: "react_logo.png"},
			{logo: "ruby_logo.jpg"},
			{logo: "swift_logo.png"},
		  {logo: "rails_logo.png"},
		  {logo: "apple_logo.png"},
			{logo: "html_logo.png"},
			{logo: "javascript_logo.png"},
			{logo: "mysql_logo.jpg"}]
	end

	def quote
		{quote: "“Everyday life is like programming, I guess. If you love something you can put beauty into it.”", cort: "Donald Knuth"}
	end

	def hash_value 
		{logos: logos, quote: quote}
	end
end