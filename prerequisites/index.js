const sapaBaji = () => {
  console.log("Berjalan cuy");
};
sapaBaji();

const tombolAlarm = (instruksiNanti) =>{
  console.log("Tombol Alarm ditekan");

  instruksiNanti();
};

const bunyikanKlakson = () =>{
  console.log("TOOOOOOOODDDD! Suara Klakson berbunyi.");
};

tombolAlarm(bunyikanKlakson);


class RobotTempur {
  constructor(name = "", job = ""){
    this.name = name;
    this.job = job;
  }

  serang(obj){
    console.log(`Menyerang: ${obj}`);
  }
}

const robotBaji = new RobotTempur();
robotBaji.name = "Tuan Baji Ganteng";
robotBaji.job = "kerja";
robotBaji.serang("Leher");