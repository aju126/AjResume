# require 'rubygems'
# require 'linkedin'
# require 'linked_in/client'
# require 'linked_in/api'
# module AJ
#   module LinkedIn
#     def login
#       # get your api keys at https://www.linkedin.com/secure/developer
#       client = LinkedIn::Client.new('86gzpb15oha8tx', 'OG78YiSOyh0PvgQK')
#
# # If you want to use one of the scopes from linkedin you have to pass it in at this point
# # You can learn more about it here: http://developer.linkedin.com/documents/authentication
#       request_token = client.request_token({}, :scope => "r_basicprofile r_emailaddress")
#
#       rtoken = request_token.token
#       rsecret = request_token.secret
#
# # to test from your desktop, open the following url in your browser
# # and record the pin it gives you
#       pin = request_token.authorize_url
#
# # then fetch your access keys
#       auth = client.authorize_from_request(rtoken, rsecret, pin)
#
# # or authorize from previously fetched access keys
#       client.authorize_from_access(*auth)
#       client.connections
#     end
#   end
# end