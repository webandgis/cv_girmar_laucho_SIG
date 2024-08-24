const mapContainter=document.querySelector('#map');
const buttonUcv= document.querySelector('#ucv');
const buttonUdelar=document.querySelector('#udelar')
const buttonMtop=document.querySelector('#mtop')
const buttonIne=document.querySelector('#ine');
const buttonDnc= document.querySelector('#dnc');
const buttonIgvsb=document.querySelector('#igvsb');
const buttonfcien=document.querySelector('#fcien');
const buttonIng=document.querySelector('#ing')


const map= L.map('map',{ zoomControl:false }).setView([-32.505, -56],4, zoomSnap = 0.1, zoomDelta = 0.1);



const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'

}).addTo(map);


//Gráficos
const data = {
  labels: ['Data Analytics','Introducción a Análisis y Visualización de Datos en R','Introducción a SQL', 'Flujos de Trabajo (Creación de Geodatabase)','Python-Django','Python-Programacíon Web', 'Getting Started with Python', 'SIG con Python en Qgis', 'React', 'JavaScript', 'Desarrollo Web',],
  datasets: [{
    label: 'Historial Académico',
    data: [2024,2024,2020,2020,2023,2021,2022, 2022, 2022, 2023, 2023, 2023],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 194, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(75, 192, 198, 0.2)',
      'rgba(54, 169, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(75, 192, 192, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 194, 192)',
      'rgb(54, 162, 235)',
      'rgba(75, 192, 192, 0.2)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgba(75, 192, 198, 0.2)',
      'rgba(54, 169, 235, 0.2)',
      'rgba(75, 192, 192, 0.2)',
    ],
    borderWidth: 1,
  }],
};

const chartBar = document.querySelector('#myChart').getContext('2d');
const barChart = new Chart(chartBar, {
  type: 'bar',
  data: data,
  options: {
    scales: {
      xAxes: [{
        ticks: {
          display: false
        }
      }],
      yAxes: [{
        ticks: {
          stepSize: 1,
          beginAtZero: false,
          min: 2018,
          display: true,
          fontColor: 'white'
        
        },
        scaleLabel: {
          display: true,
          labelString: 'Año',
          fontColor: 'white'
        }
        
      }]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    }
  }
});

const dataChart = {
  labels: ['Consultora de Sistemas de Información Geográfica', 'Ayudante Grado I', ' Analista de Datos y Sistemas de Información Geográfica', 'Analista SIG','Analista SIG'],
  datasets: [{
    label: 'Experiencia Laboral',
    data: [2024, 2024, 2023, 2020, 2019],
    backgroundColor: [
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const chartPie = document.querySelector('#chart').getContext('2d');
const barPie = new Chart(chart, {
  type: 'doughnut',
  data: dataChart,
  options: {
    legend: {
      display: true,
      labels: {
        fontColor: 'white',
        filter: function (legendItem, chartData) {
          return chartData.labels.indexOf(legendItem.text) <= 2;
        }
      }
    }
  }
});

let udelarMarker=L.marker([-34.881465514101755, -56.11724478465528]).addTo(map).bindPopup("<h6 class='text center' >UDELAR - Facultad de Ciencias</h6><a href='https://www.fcien.edu.uy/' target='blank'><img src='img/udelar.png' width='200px'></a>")

let ucvMarker = L.marker([10.491374588325108, -66.88941681125264]).addTo(map).bindPopup("<h6 class='text center' >UCV - Escuela de Geografía 2018</h6><a href='http://www.ucv.ve/estructura/facultades/facultad-de-humanidades-y-educacion/servicio-comunitario/proyectos/proyectos-ejecutados/escuela-de-geografia.html' target='blank'><img src='img/ucv.jpg' width='200px'></a>");

let mtopMarker=L.marker([-34.905200741228384, -56.20420091534472]).addTo(map).bindPopup("<h6 class='text center' >MTOP</h6><a href='https://www.gub.uy/ministerio-transporte-obras-publicas/' target='blank'><img src='img/mtop.png' width='200px'></a>")

let ineMarker=L.marker([-34.907650807562106, -56.20009881584393]).addTo(map).bindPopup("<h6 class='text center'>INE - Geomática</h6> <a href='https://www.ine.gub.uy/' target='blank'> <img src='img/ine.png' width='200px'></a>");

let dncMarker=L.marker([-34.90438700326136, -56.19164238316665]).addTo(map).bindPopup("<h6 class='text center'>DNC</h6> <a href='https://www.gub.uy/ministerio-economia-finanzas/institucional-dnc' target='blank'> <img src='img/dnc.jpg' width='200px'></a>");

let igvsbMarker=L.marker([10.502717910675859, -66.91307830278953]).addTo(map).bindPopup("<h6 class='text center'>IGVSB</h6> <a href='https://es.wikipedia.org/wiki/Instituto_Geogr%C3%A1fico_de_Venezuela_Sim%C3%B3n_Bol%C3%ADvar' target='blank'> <img src='img/igvsb.jpg' width='100px'></a>");

let fcienMarker=L.marker([-34.881465514101755, -56.11724478465528]).addTo(map).bindPopup("<h6 class='text center' >UDELAR - Facultad de Ciencias</h6><a href='https://www.fcien.edu.uy/institucional/estructura-academica/unidades/departamento-de-geografia' target='blank'><img src='img/udelar.png' width='200px'></a>")

let ingeolanMarker=L.marker([10.501219270251166, -66.78784554635455]).addTo(map).bindPopup("<h6 class='text center'>Ingeolan</h6> <a href='http://www.ingeolan.com/' target='blank'> <img src='img/ingeolan.jpg' width='200px'></a>");


buttonUcv.addEventListener('click', () => {
  map.setView([10.491374588325108, -66.88941681125264],17);

});

buttonUdelar.addEventListener('click',()=>{
  map.setView([-34.881465514101755, -56.11724478465528],17)
})

buttonMtop.addEventListener('click',()=>{
  map.setView([-34.907650807562106, -56.20009881584393],17)
})

buttonIne.addEventListener('click', () =>{
  map.setView([-34.907650807562106, -56.20009881584393],17);
} );

buttonDnc.addEventListener ('click', () => {
  map.setView([-34.90438700326136, -56.19164238316665],17);
})

buttonIgvsb.addEventListener('click', () =>{
  map.setView([10.502717910675859, -66.91307830278953],17);
})

buttonfcien.addEventListener('click', () =>{
  map.setView([-34.881465514101755, -56.11724478465528],17);
})

buttonIng.addEventListener('click', () =>{
  map.setView([10.501219270251166, -66.787845546354553],17);
})

map.on('mousemove',function(e){
  let str="Latitud: "+e.latlng.lat.toFixed(5)+ " "+"Longitud:"+e.latlng.lng.toFixed(5);
  $("#map_coords").html(str);
}
);

