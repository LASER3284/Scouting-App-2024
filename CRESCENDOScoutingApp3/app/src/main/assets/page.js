var AUTOAMP = 0;
var AUTOAMPATT = 0;
var AUTOSPKR = 0;
var AUTOSPKRATT = 0;
var TELEAMP = 0;
var TELEAMPATT = 0;
var TELESPKR = 0;
var TELESPKRATT = 0;
var TRAP = 0;

// AUTOS
function AUTOAMP_UP()
{
  AUTOAMP++;
    document.getElementById('auto-amp').value = AUTOAMP;
}
function AUTOAMP_DOWN()
{
  AUTOAMP--;
    document.getElementById('auto-amp').value = AUTOAMP;
}
function AUTOAMPATT_UP()
{
  AUTOAMPATT++;
    document.getElementById('auto-ampatt').value = AUTOAMPATT;
}
function AUTOAMPATT_DOWN()
{
  AUTOAMPATT--;
    document.getElementById('auto-ampatt').value = AUTOAMPATT;
}
function AUTOSPKR_UP()
{
  AUTOSPKR++;
    document.getElementById('auto-spkr').value = AUTOSPKR;
}
function AUTOSPKR_DOWN()
{
  AUTOSPKR--;
    document.getElementById('auto-spkr').value = AUTOSPKR;
}
function AUTOSPKRATT_UP()
{
  AUTOSPKRATT++;
    document.getElementById('auto-spkratt').value = AUTOSPKRATT;
}
function AUTOSPKRATT_DOWN()
{
  AUTOSPKRATT--;
    document.getElementById('auto-spkratt').value = AUTOSPKRATT;
}

// TELE
function TELEAMP_UP()
{
  TELEAMP++;
    document.getElementById('tele-amp').value = TELEAMP;
}
function TELEAMP_DOWN()
{
  TELEAMP--;
    document.getElementById('tele-amp').value = TELEAMP;
}
function TELEAMPATT_UP()
{
  TELEAMPATT++;
    document.getElementById('tele-ampatt').value = TELEAMPATT;
}
function TELEAMPATT_DOWN()
{
  TELEAMPATT--;
    document.getElementById('tele-ampatt').value = TELEAMPATT;
}
function TELESPKR_UP()
{
  TELESPKR++;
    document.getElementById('tele-spkr').value = TELESPKR;
}
function TELESPKR_DOWN()
{
  TELESPKR--;
    document.getElementById('tele-spkr').value = TELESPKR;
}
function TELESPKRATT_UP()
{
  TELESPKRATT++;
    document.getElementById('tele-spkratt').value = TELESPKRATT;
}
function TELESPKRATT_DOWN()
{
  TELESPKRATT--;
    document.getElementById('tele-spkratt').value = TELESPKRATT;
}
// ENDGAME
function TRAP_UP()
{
  TRAP++;
    document.getElementById('trap').value = TRAP;
}
function TRAP_DOWN()
{
  TRAP--;
    document.getElementById('trap').value = TRAP;
}

let fileNumber = 1;

async function saveFormData() {
    var name = document.getElementById('name').value;
    var team_num = document.getElementById('team_num').value;
    var match_num = document.getElementById('match_num').value;
    var post = document.getElementById('post').value;
    var leave = document.getElementById('mobile?').checked;
    var AUTOAMPATT = document.getElementById('auto-ampatt').value;
    var AUTOAMP = document.getElementById('auto-amp').value;
    var AUTOSPKRATT = document.getElementById('auto-spkratt').value;
    var AUTOSPKR = document.getElementById('auto-spkr').value;
    var TELEAMPATT = document.getElementById('tele-ampatt').value;
    var TELEAMP = document.getElementById('tele-amp').value;
    var TELESPKRATT = document.getElementById('tele-spkratt').value;
    var TELESPKR = document.getElementById('tele-spkr').value;
    var park = document.getElementById('park').checked;
    var onstage = document.getElementById('onstage').checked;
    var two = document.getElementById('two').checked;
    var three = document.getElementById('three').checked;
    var trap = document.getElementById('trap').value;
    var notes = document.getElementById('notes').value;

    var csvContent = "Name,Team Number,Match Number,Position,Leave,Amp Attempts,Amp,Speaker Attempts,Speaker,Amp Attempts,Amp,Speaker Attempts,Speaker," +
    "Park,Onstage,Harmony(2),Harmony(3),Trap,Notes\n"
      + name + "," + team_num + "," + match_num + "," + post + ","
      + leave + "," + AUTOAMPATT + "," + AUTOAMP + "," + AUTOSPKRATT + "," +
      AUTOSPKR + "," + TELEAMPATT + "," + TELEAMP + "," + TELESPKRATT + "," +
      TELESPKR  + "," + park + "," + onstage +  "," + two + ","
      + three + "," + trap + "," + notes + "\n";

      try {
        const currentDate = new Date();

        const dateStr = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}_${currentDate.getHours()}-${currentDate.getMinutes()}-${currentDate.getSeconds()}`;

        const fileName = `${dateStr}_${name}.csv`;
/*
        const blob = new Blob([csvContent], { type: 'text/csv' });

                const handle = await window.showSaveFilePicker({
                    suggestedName: fileName,
                    types: [{
                        description: 'CSV Files',
                        accept: { 'text/csv': ['.csv'] },
                    }],
                });

                const writableStream = await handle.createWritable();

                await writableStream.write(blob);

                await writableStream.close();
*/

        fileWriter.logd("about to save!");

        fileWriter.writeFile(fileName, csvContent);

                fileNumber++;
            } catch (error) {
                console.error('Error saving CSV file:', error);
            }
        }