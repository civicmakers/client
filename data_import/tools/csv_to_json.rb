#!/usr/bin/env ruby

# ruby script to add tools from Spreadsheet (converted to CSV) at
# https://docs.google.com/spreadsheets/d/1gxxMTOFByIkkDDQS4ea3ETW2z8XEPVA2tO15dY77nbs/edit

require 'CSV'
require 'json'
require 'pp'
require 'securerandom'

# change to location/name of csv file
locationOfCsvFile = "toollist2.csv"

csv_data = open(locationOfCsvFile).read()
csv = CSV.new(csv_data, :headers => :headers)

output = File.open( "toolist2.json", "w")

docs = {}

csv.each do | row, n |
  guid = SecureRandom.uuid
  docs[guid] = {}
  row.each do | attribute |
     key = attribute[0].to_s
     if (key == 'Tags')
       docs[guid][key] = attribute[1].to_s.split(',').map{ | s | s.strip}
     elsif(key == 'created_at')
       docs[guid][key] = Time.now.getutc.to_i
     elsif(key == 'display')
       docs[guid][key] = true
     else
       docs[guid][key] = attribute[1].to_s
     end
  end
end
output.puts(docs.to_json)
output.close
