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
		@contact = Contact.new.hash_value

		# connection = login
		# raise connection.inspect
	end


	def resume

		#send_file Rails.root.join(ActionController::Base.helpers.asset_path("ajith_resume_2016.pdf")), :type=>"application/pdf", :x_sendfile=>true
		 send_file("#{Rails.root}/public" + ActionController::Base.helpers.asset_path("ajith_resume_2016.pdf"),
							x_sendfile: true,
		 					:type => 'application/pdf')
	end
end