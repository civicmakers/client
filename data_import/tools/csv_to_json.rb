#!/usr/bin/env ruby

# ruby script to convert tools from CSV (exported from Spreadsheet) to JSON at
# https://docs.google.com/spreadsheets/d/1gxxMTOFByIkkDDQS4ea3ETW2z8XEPVA2tO15dY77nbs/edit

require 'CSV'
require 'json'
require 'pp'
require 'securerandom'

# change to location/name of csv file
locationOfCsvFile = "toollist6.csv"

output = File.open( "toollist6.json", "w")

docs = {}
row_num = 1;

CSV.foreach(locationOfCsvFile, :headers => :headers) do | row |
  guid = "tool_list_#{row[0]}"
  docs[guid] = {}
  row.each do | attribute |
     key = attribute[0].to_s
     if (key == 'Tags')
       docs[guid][key] = attribute[1].to_s.split(',').map{ | s | s.strip}
     elsif(key == 'toolID')
       puts "Skipping ID attr"

     elsif(key == 'display')
       docs[guid][key] = if (attribute[1].downcase == 'true') then true else false end
     else
       docs[guid][key] = attribute[1].to_s
     end
  end
  docs[guid]['createdAt'] = (Time.now.getutc * 1000).to_i
  docs[guid]['type'] = 'tool'
end
output.puts(docs.to_json)
output.close
