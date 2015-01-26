require 'sinatra'

get '/' do 
File.read(File.join('public', 'grid.html'))

end