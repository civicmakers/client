

require 'CSV'
require 'json'
require 'pp'
require 'securerandom'

locationOfCsvFile = "toollist2.csv"

csv_data = open(locationOfCsvFile).read()
csv = CSV.new(csv_data, :headers => :headers)

output = File.open( "toolist2.json", "w")

docs = {}

csv.each do | row, n |
  guid = SecureRandom.uuid
  docs[guid] = {}
  row.each do | attribute |
     if (attribute[0].to_s == 'Tags')
       docs[guid][attribute[0].to_s] = attribute[1].to_s.split(',').map{ | s | s.strip}
     elsif(attribute[0].to_s == 'created_at')
       docs[guid][attribute[0].to_s] = Time.now.getutc.to_i
     elsif(attribute[0].to_s == 'display')
       docs[guid][attribute[0].to_s] = true
     else
       docs[guid][attribute[0].to_s] = attribute[1].to_s
     end
  end
end
output.puts(docs.to_json)
output.close

