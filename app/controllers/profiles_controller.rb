#require 'aj/linkedin'
class ProfilesController < ApplicationController
	#include AJ::LinkedIn
	def index 
		@profile = Profile.new.hash_value
		@about = About.new.hash_value
		@tech = Tech.new.hash_value
		@tools = Tools.new.hash_value
		@tools = Tools.new.hash_value
		@projects = Timeline.new.hash_value
		@recommend = Recommend.new.hash_value

		# connection = login
		# raise connection.inspect
	end

	def resume
		'assets/chetan.jpg'
	end
end