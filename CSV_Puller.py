import glob
import csv
import subprocess
import argparse
import os

parser = argparse.ArgumentParser(
    prog="CSV_Puller.py",
    description="Compiles the CSVs from the tablets into one large CSV for analysis :)",
    epilog=""
)

parser.add_argument("-o", "--output", default="stats-compiled.csv")
parser.add_argument("-s", "--scan", default="crescendo")
parser.add_argument("-r", "--retrieve", action="store_true")
args = parser.parse_args()

if args.retrieve:
    subprocess.run(["adb", "pull", "/storage/emulated/0/Download/crescendo", args.scan])

# Combine the CSV files into one bigger, better, CSV file
file_root = args.scan
csv_rows = []
for file_i, file in enumerate(glob.glob(os.path.join(file_root, "*.csv"))):
    with open(file, "r+", newline='') as fIn:
        reader = csv.reader(fIn)
        for idx, row in enumerate(reader):
            # Grab the header from the very first file
            if idx == 0 and file_i == 0:
                csv_rows.append(row)
            elif idx == 0: 
                continue
            else:
                csv_rows.append(row)

# Write the file!
with open(args.output, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)
    for row in csv_rows:
        writer.writerow(row)

            
