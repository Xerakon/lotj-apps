/*
	LotJ Planner Custom JS
	for use with LotJ Character Planner
	by @Xerakon
	http://xerakon.com/lotj
	racePlanner.js
	Version 1.0
*/

// map out skincolor html
const skinColorMapping = {
  "black": '<font color="#1c1c1c">black</font>',
  "dark brown": '<font color="#5f5f00">dark brown</font>',
  "brown": '<font color="#875f00">brown</font>',
  "ruddy brown": '<font color="#af5f00">ruddy brown</font>',
  "reddish brown": '<font color="#d75f00">reddish brown</font>',
  "mocha": '<font color="#d7af5f">mocha</font>',
  "light brown": '<font color="#d7af00">light brown</font>',
  "tan": '<font color="#d7af87">tan</font>',
  "ivory": '<font color="#ffffd7">ivory</font>',
  "white": '<font color="#ffd7d7">white</font>',
  "pale white": '<font color="#ffffff">pale white</font>',
  "grey": '<font color="#bcbcbc">grey</font>',
  "silver": '<font color="#d0d0d0">s</font><font color="#dadada">i</font><font color="#eeeeee">lv</font><font color="#9e9e9e">e</font><font color="#d0d0d0">r</font>',
  "pale pink": '<font color="#ffafff">pale pink</font>',
  "pink": '<font color="#ff5fff">pink</font>',
  "red": '<font color="#ff0000">red</font>',
  "dark red": '<font color="#af0000">dark red</font>',
  "orange": '<font color="#ff8700">orange</font>',
  "golden": '<font color="#ffff00">g</font><font color="#ffff5f">o</font><font color="#ffff87">l</font><font color="#ffffaf">d</font><font color="#ffff00">e</font><font color="#ffffaf">n</font>',
  "yellow": '<font color="#ffffaf">yellow</font>',
  "light green": '<font color="#00ff87">light green</font>',
  "green": '<font color="#00af00">green</font>',
  "dark green": '<font color="#008700">dark green</font>',
  "cyan": '<font color="#00afaf">cyan</font>',
  "light blue": '<font color="#5fd7ff">light blue</font>',
  "blue": '<font color="#0087ff">blue</font>',
  "dark blue": '<font color="#0000ff">dark blue</font>',
  "purple": '<font color="#8700d7">purple</font>'
};

// Fetch the raceList.json file from the js subfolder
fetch('js/raceList.json')
  .then(response => response.json())
  .then(raceList => {
    // populate the dropdown menu with race names
    const raceSelect = document.getElementById('raceSelect');
    // get the race names and sort them alphabetically
    const sortedRaces = Object.keys(raceList).sort();

    sortedRaces.forEach(race => {
      const option = document.createElement('option');
      option.value = race;
      option.textContent = race;
      raceSelect.appendChild(option);
    });

    // display the details when a race is selected
    raceSelect.addEventListener('change', function() {
      const selectedRace = raceSelect.value;
      const raceDetails = raceList[selectedRace] || {};

      // update race data and defaults
      document.getElementById('dataRace1').textContent = raceDetails.raceName ?? "";
      document.getElementById('dataRace2').textContent = raceDetails.raceName ?? "";
      document.getElementById('dataRace3').textContent = raceDetails.raceName ?? "";
      document.getElementById('dataStr').textContent = raceDetails.strPlus ?? 0;
      document.getElementById('dataDex').textContent = raceDetails.dexPlus ?? 0;
      document.getElementById('dataWis').textContent = raceDetails.wisPlus ?? 0;
      document.getElementById('dataInt').textContent = raceDetails.intPlus ?? 0;
      document.getElementById('dataCon').textContent = raceDetails.conPlus ?? 0;
      document.getElementById('dataCha').textContent = raceDetails.chaPlus ?? 0;
      document.getElementById('dataLck').textContent = raceDetails.lckPlus ?? 0;
      document.getElementById('dataHp').textContent = raceDetails.hitPts ?? 0;
      document.getElementById('dataAc').textContent = raceDetails.acMod ?? 0;
      document.getElementById('dataFrc').textContent = raceDetails.frcPlus ?? 0;
      document.getElementById('dataPrice').textContent = raceDetails.price ?? 0;
      document.getElementById('dataDeposit').textContent = raceDetails.deposit ?? 0;
      document.getElementById('dataApp').textContent = raceDetails.appOnly ?? "No";
      document.getElementById('dataShortDesc').textContent = raceDetails.shortDesc ?? "";
      document.getElementById('dataLang').textContent = raceDetails.defaultLang ?? "";

      // pull in and format skin colors
      if (raceDetails.skinColors && Object.keys(raceDetails.skinColors).length > 0) {
        const skinColors = Object.keys(raceDetails.skinColors);
        let skinColorsHTML = '';
        for (let i = 0; i < skinColors.length; i += 3) {
          const col1 = skinColorMapping[skinColors[i]] ? skinColorMapping[skinColors[i]] : '';
          const col2 = skinColorMapping[skinColors[i + 1]] ? skinColorMapping[skinColors[i + 1]] : '';
          const col3 = skinColorMapping[skinColors[i + 2]] ? skinColorMapping[skinColors[i + 2]] : '';
          skinColorsHTML += `<div class="skinColorRow"><div>${col1}</div><div>${col2}</div><div>${col3}</div></div>`;
        }
        document.getElementById('dataSkinColors').innerHTML = skinColorsHTML;
      } else {
        document.getElementById('dataSkinColors').textContent = "None";
      }

      // pull in and format racial traits
      if (raceDetails.racialTraits && Object.keys(raceDetails.racialTraits).length > 0) {
        const traits = Object.keys(raceDetails.racialTraits).join('<br>');
        document.getElementById('dataRacialTraits').innerHTML = traits;
      } else {
        document.getElementById('dataRacialTraits').textContent = "";
      }
      
      // assign levels as race changes, defaulting to 0 in event JSON is in error
      document.getElementById('dataComCom').textContent = raceDetails.com_com ?? 0;
      document.getElementById('dataComPil').textContent = raceDetails.com_pil ?? 0;
      document.getElementById('dataComEng').textContent = raceDetails.com_eng ?? 0;
      document.getElementById('dataComHun').textContent = raceDetails.com_hun ?? 0;
      document.getElementById('dataComSmu').textContent = raceDetails.com_smu ?? 0;
      document.getElementById('dataComLea').textContent = raceDetails.com_lea ?? 0;
      document.getElementById('dataComEsp').textContent = raceDetails.com_esp ?? 0;
      document.getElementById('dataComSli').textContent = raceDetails.com_sli ?? 0;
      document.getElementById('dataComMed').textContent = raceDetails.com_med ?? 0;
      document.getElementById('dataComSci').textContent = raceDetails.com_sci ?? 0;
      document.getElementById('dataPilCom').textContent = raceDetails.pil_com ?? 0;
      document.getElementById('dataPilPil').textContent = raceDetails.pil_pil ?? 0;
      document.getElementById('dataPilEng').textContent = raceDetails.pil_eng ?? 0;
      document.getElementById('dataPilHun').textContent = raceDetails.pil_hun ?? 0;
      document.getElementById('dataPilSmu').textContent = raceDetails.pil_smu ?? 0;
      document.getElementById('dataPilLea').textContent = raceDetails.pil_lea ?? 0;
      document.getElementById('dataPilEsp').textContent = raceDetails.pil_esp ?? 0;
      document.getElementById('dataPilSli').textContent = raceDetails.pil_sli ?? 0;
      document.getElementById('dataPilMed').textContent = raceDetails.pil_med ?? 0;
      document.getElementById('dataPilSci').textContent = raceDetails.pil_sci ?? 0;
      document.getElementById('dataEngCom').textContent = raceDetails.eng_com ?? 0;
      document.getElementById('dataEngPil').textContent = raceDetails.eng_pil ?? 0;
      document.getElementById('dataEngEng').textContent = raceDetails.eng_eng ?? 0;
      document.getElementById('dataEngHun').textContent = raceDetails.eng_hun ?? 0;
      document.getElementById('dataEngSmu').textContent = raceDetails.eng_smu ?? 0;
      document.getElementById('dataEngLea').textContent = raceDetails.eng_lea ?? 0;
      document.getElementById('dataEngEsp').textContent = raceDetails.eng_esp ?? 0;
      document.getElementById('dataEngSli').textContent = raceDetails.eng_sli ?? 0;
      document.getElementById('dataEngMed').textContent = raceDetails.eng_med ?? 0;
      document.getElementById('dataEngSci').textContent = raceDetails.eng_sci ?? 0;
      document.getElementById('dataHunCom').textContent = raceDetails.hun_com ?? 0;
      document.getElementById('dataHunPil').textContent = raceDetails.hun_pil ?? 0;
      document.getElementById('dataHunEng').textContent = raceDetails.hun_eng ?? 0;
      document.getElementById('dataHunHun').textContent = raceDetails.hun_hun ?? 0;
      document.getElementById('dataHunSmu').textContent = raceDetails.hun_smu ?? 0;
      document.getElementById('dataHunLea').textContent = raceDetails.hun_lea ?? 0;
      document.getElementById('dataHunEsp').textContent = raceDetails.hun_esp ?? 0;
      document.getElementById('dataHunSli').textContent = raceDetails.hun_sli ?? 0;
      document.getElementById('dataHunMed').textContent = raceDetails.hun_med ?? 0;
      document.getElementById('dataHunSci').textContent = raceDetails.hun_sci ?? 0;
      document.getElementById('dataSmuCom').textContent = raceDetails.smu_com ?? 0;
      document.getElementById('dataSmuPil').textContent = raceDetails.smu_pil ?? 0;
      document.getElementById('dataSmuEng').textContent = raceDetails.smu_eng ?? 0;
      document.getElementById('dataSmuHun').textContent = raceDetails.smu_hun ?? 0;
      document.getElementById('dataSmuSmu').textContent = raceDetails.smu_smu ?? 0;
      document.getElementById('dataSmuLea').textContent = raceDetails.smu_lea ?? 0;
      document.getElementById('dataSmuEsp').textContent = raceDetails.smu_esp ?? 0;
      document.getElementById('dataSmuSli').textContent = raceDetails.smu_sli ?? 0;
      document.getElementById('dataSmuMed').textContent = raceDetails.smu_med ?? 0;
      document.getElementById('dataSmuSci').textContent = raceDetails.smu_sci ?? 0;
      document.getElementById('dataLeaCom').textContent = raceDetails.lea_com ?? 0;
      document.getElementById('dataLeaPil').textContent = raceDetails.lea_pil ?? 0;
      document.getElementById('dataLeaEng').textContent = raceDetails.lea_eng ?? 0;
      document.getElementById('dataLeaHun').textContent = raceDetails.lea_hun ?? 0;
      document.getElementById('dataLeaSmu').textContent = raceDetails.lea_smu ?? 0;
      document.getElementById('dataLeaLea').textContent = raceDetails.lea_lea ?? 0;
      document.getElementById('dataLeaEsp').textContent = raceDetails.lea_esp ?? 0;
      document.getElementById('dataLeaSli').textContent = raceDetails.lea_sli ?? 0;
      document.getElementById('dataLeaMed').textContent = raceDetails.lea_med ?? 0;
      document.getElementById('dataLeaSci').textContent = raceDetails.lea_sci ?? 0;
      document.getElementById('dataEspCom').textContent = raceDetails.esp_com ?? 0;
      document.getElementById('dataEspPil').textContent = raceDetails.esp_pil ?? 0;
      document.getElementById('dataEspEng').textContent = raceDetails.esp_eng ?? 0;
      document.getElementById('dataEspHun').textContent = raceDetails.esp_hun ?? 0;
      document.getElementById('dataEspSmu').textContent = raceDetails.esp_smu ?? 0;
      document.getElementById('dataEspLea').textContent = raceDetails.esp_lea ?? 0;
      document.getElementById('dataEspEsp').textContent = raceDetails.esp_esp ?? 0;
      document.getElementById('dataEspSli').textContent = raceDetails.esp_sli ?? 0;
      document.getElementById('dataEspMed').textContent = raceDetails.esp_med ?? 0;
      document.getElementById('dataEspSci').textContent = raceDetails.esp_sci ?? 0;
      document.getElementById('dataSliCom').textContent = raceDetails.sli_com ?? 0;
      document.getElementById('dataSliPil').textContent = raceDetails.sli_pil ?? 0;
      document.getElementById('dataSliEng').textContent = raceDetails.sli_eng ?? 0;
      document.getElementById('dataSliHun').textContent = raceDetails.sli_hun ?? 0;
      document.getElementById('dataSliSmu').textContent = raceDetails.sli_smu ?? 0;
      document.getElementById('dataSliLea').textContent = raceDetails.sli_lea ?? 0;
      document.getElementById('dataSliEsp').textContent = raceDetails.sli_esp ?? 0;
      document.getElementById('dataSliSli').textContent = raceDetails.sli_sli ?? 0;
      document.getElementById('dataSliMed').textContent = raceDetails.sli_med ?? 0;
      document.getElementById('dataSliSci').textContent = raceDetails.sli_sci ?? 0;
      document.getElementById('dataMedCom').textContent = raceDetails.med_com ?? 0;
      document.getElementById('dataMedPil').textContent = raceDetails.med_pil ?? 0;
      document.getElementById('dataMedEng').textContent = raceDetails.med_eng ?? 0;
      document.getElementById('dataMedHun').textContent = raceDetails.med_hun ?? 0;
      document.getElementById('dataMedSmu').textContent = raceDetails.med_smu ?? 0;
      document.getElementById('dataMedLea').textContent = raceDetails.med_lea ?? 0;
      document.getElementById('dataMedEsp').textContent = raceDetails.med_esp ?? 0;
      document.getElementById('dataMedSli').textContent = raceDetails.med_sli ?? 0;
      document.getElementById('dataMedMed').textContent = raceDetails.med_med ?? 0;
      document.getElementById('dataMedSci').textContent = raceDetails.med_sci ?? 0;
      document.getElementById('dataSciCom').textContent = raceDetails.sci_com ?? 0;
      document.getElementById('dataSciPil').textContent = raceDetails.sci_pil ?? 0;
      document.getElementById('dataSciEng').textContent = raceDetails.sci_eng ?? 0;
      document.getElementById('dataSciHun').textContent = raceDetails.sci_hun ?? 0;
      document.getElementById('dataSciSmu').textContent = raceDetails.sci_smu ?? 0;
      document.getElementById('dataSciLea').textContent = raceDetails.sci_lea ?? 0;
      document.getElementById('dataSciEsp').textContent = raceDetails.sci_esp ?? 0;
      document.getElementById('dataSciSli').textContent = raceDetails.sci_sli ?? 0;
      document.getElementById('dataSciMed').textContent = raceDetails.sci_med ?? 0;
      document.getElementById('dataSciSci').textContent = raceDetails.sci_sci ?? 0;

      // color the class numbers appropriately
      $("#dataComCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_com));
      $("#dataComCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_com));
      $("#dataComPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_pil));
      $("#dataComEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_eng));
      $("#dataComHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_hun));
      $("#dataComSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_smu));
      $("#dataComLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_lea));
      $("#dataComEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_esp));
      $("#dataComSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_sli));
      $("#dataComMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_med));
      $("#dataComSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.com_sci));
      $("#dataPilCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_com));
      $("#dataPilPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_pil));
      $("#dataPilEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_eng));
      $("#dataPilHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_hun));
      $("#dataPilSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_smu));
      $("#dataPilLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_lea));
      $("#dataPilEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_esp));
      $("#dataPilSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_sli));
      $("#dataPilMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_med));
      $("#dataPilSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.pil_sci));
      $("#dataEngCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_com));
      $("#dataEngPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_pil));
      $("#dataEngEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_eng));
      $("#dataEngHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_hun));
      $("#dataEngSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_smu));
      $("#dataEngLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_lea));
      $("#dataEngEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_esp));
      $("#dataEngSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_sli));
      $("#dataEngMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_med));
      $("#dataEngSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.eng_sci));
      $("#dataHunCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_com));
      $("#dataHunPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_pil));
      $("#dataHunEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_eng));
      $("#dataHunHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_hun));
      $("#dataHunSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_smu));
      $("#dataHunLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_lea));
      $("#dataHunEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_esp));
      $("#dataHunSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_sli));
      $("#dataHunMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_med));
      $("#dataHunSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.hun_sci));
      $("#dataSmuCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_com));
      $("#dataSmuPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_pil));
      $("#dataSmuEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_eng));
      $("#dataSmuHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_hun));
      $("#dataSmuSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_smu));
      $("#dataSmuLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_lea));
      $("#dataSmuEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_esp));
      $("#dataSmuSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_sli));
      $("#dataSmuMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_med));
      $("#dataSmuSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.smu_sci));
      $("#dataLeaCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_com));
      $("#dataLeaPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_pil));
      $("#dataLeaEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_eng));
      $("#dataLeaHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_hun));
      $("#dataLeaSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_smu));
      $("#dataLeaLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_lea));
      $("#dataLeaEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_esp));
      $("#dataLeaSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_sli));
      $("#dataLeaMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_med));
      $("#dataLeaSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.lea_sci));
      $("#dataEspCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_com));
      $("#dataEspPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_pil));
      $("#dataEspEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_eng));
      $("#dataEspHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_hun));
      $("#dataEspSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_smu));
      $("#dataEspLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_lea));
      $("#dataEspEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_esp));
      $("#dataEspSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_sli));
      $("#dataEspMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_med));
      $("#dataEspSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.esp_sci));
      $("#dataSliCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_com));
      $("#dataSliPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_pil));
      $("#dataSliEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_eng));
      $("#dataSliHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_hun));
      $("#dataSliSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_smu));
      $("#dataSliLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_lea));
      $("#dataSliEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_esp));
      $("#dataSliSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_sli));
      $("#dataSliMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_med));
      $("#dataSliSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sli_sci));
      $("#dataMedCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_com));
      $("#dataMedPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_pil));
      $("#dataMedEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_eng));
      $("#dataMedHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_hun));
      $("#dataMedSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_smu));
      $("#dataMedLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_lea));
      $("#dataMedEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_esp));
      $("#dataMedSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_sli));
      $("#dataMedMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_med));
      $("#dataMedSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.med_sci));
      $("#dataSciCom").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_com));
      $("#dataSciPil").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_pil));
      $("#dataSciEng").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_eng));
      $("#dataSciHun").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_hun));
      $("#dataSciSmu").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_smu));
      $("#dataSciLea").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_lea));
      $("#dataSciEsp").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_esp));
      $("#dataSciSli").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_sli));
      $("#dataSciMed").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_med));
      $("#dataSciSci").removeClass("l1 l2 l3 l4 l5").addClass(colorRaceClass(raceDetails.sci_sci));

      // display the selected race's help file
      $("#helpfile").html( help[selectedRace] );
    });
  })
  .catch(error => console.error('Error loading the raceList.json:', error));

// function to determine appropriate showrace colors
function colorRaceClass(raceClass) {
	if (raceClass >= 131) {
		return "l5"
	} else if (101 <= raceClass && raceClass <= 130) {
		return "l4"
	} else if (71 <= raceClass && raceClass <= 100) {
		return "l3"
	} else if (31 <= raceClass && raceClass <= 70) {
		return "l2"
	} else {
		return "l1"
	}
}