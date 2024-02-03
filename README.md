# 2024 Crescendo Scouting App for LASER 3284
## Usage
### Installing the App
Build the APK with Android Studio/Gradle and then deploy using ADB;
```
adb uninstall com.example.crescendoscoutingapp
adb install [PATH_TO_APK]
```
### Retrieving Data
Run the CSV_Puller.py file with desired options;
```
python3 CSV_Puller.py [-s|--scan SCAN_DIR] [-o|--output OUTPUT_FILE] [-r|--retrieve]
```
