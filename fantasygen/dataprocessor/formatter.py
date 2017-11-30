import csv

results = dict()
players = []

passing = []
receiving = []
rushing = []

reportviewer = []

print("Importing data from DraftKings...")
with open('DraftKings.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        players.append(row)

print("done\n\nImporting data from Passing")
with open('Passing.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        passing.append(row)

print("done\n\nImporting data from Receiving")
with open('Receiving.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        receiving.append(row)

print("done\n\nImporting data from Rushing")
with open('Rushing.csv', 'r') as f:
    reader = csv.reader(f)
    for row in reader:
        rushing.append(row)

players = players[1:]
passing = passing[1:]
receiving = receiving[1:]
rushing = rushing[1:]

print("players[0]")
print(players[0])
print("passing[0]")
print(passing[0])
print("receiving[0]")
print(receiving[0])
print("rushing[0]")
print(rushing[0])


print("Initializing user dictionaries")
for player in players:
    results[player[1]] = [player[0], player[1], player[2], player[4], 0, 0, 0, 0, 0, 0, 0, 0]

for passed in passing:
    if passed[1] in results:
        results[passed[1]][4] = passed[11]
        results[passed[1]][5] = passed[24]
for received in receiving:
    if received[1] in results:
        results[received[1]][6] = received[7]
        results[received[1]][7] = received[8]
        results[received[1]][8] = received[10]
for rushed in rushing:
    if rushed[1] in results:
        results[rushed[1]][9] = rushed[7]
        results[rushed[1]][10] = rushed[8]
        results[rushed[1]][11] = rushed[15]

with open('output.csv', 'w') as csvfile:
    csvfile.write("Position, Name, Salary, AvgPointsPerGame, PassingYards, PassingRushingYards, ReceivingTargets, ReceivingReceptions, ReceivingYards, RushingAttempts, RushingYards, RushingReceptions\n")
    '''
    for user, di in results.items():
        for date, usage in di.items():
            csvfile.write(user + ", " + date + ", " + str(usage['cognos_usage']) + ", " + str(usage['report_viewer_usage']) + ", " + str(usage['query_team_usage']) + "\n")'''
    for key, player in results.items():
        csvfile.write(player[0] + "," + player[1] + "," + str(player[2]) + "," + str(player[3]) + "," + str(player[4]) + "," + str(player[5]) + "," + str(player[6]) + "," + str(player[7]) + "," + str(player[8]) + "," + str(player[9]) + "," + str(player[10]) + "," + str(player[11]) + "\n")
    csvfile.close()

print("wrote to output.csv")