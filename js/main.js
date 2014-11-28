	

	
	
appendata("#slide1","#stub1","#stub1");// replace 3rd stub with dimension variable 
appendata("#slide2","#stub2","#stub2");	// replace 3rd stub with dimension variable 
appendata("#slide3","#stub3","#stub3");	// replace 3rd stub with dimension variable 
appendata("#slide4","#stub4","#stub4");	// replace 3rd stub with dimension variable 
appendata("#slide5","#stub5","#stub5");	// replace 3rd stub with dimension variable 
appendata("#slide6","#stub6","#stub6");	// replace 3rd stub with dimension variable 
appendata("#slide7","#stub7","#stub7");	// replace 3rd stub with dimension variable 
appendata("#slide8","#stub8","#stub8");	// replace 3rd stub with dimension variable 

function appendata( slide,stub,dimstore)
{

$(slide).noUiSlider({
	start: 0,
	behaviour: 'tap',
	connect: 'lower',
	range: {
		'min':  -100,
		'max': 100
	},
	format: wNumb({
		decimals: 3,		
		postfix: '%',
	})
	

});
$(slide).Link('lower').to($(stub)); 
$(slide).Link('lower').to($(dimstore));  // storing data for dp

$(slide).on({
change: function(){
		claculate();
	}
});

}	
	
	
$(function() {
claculate();
// add class name 
$('.data1').keyup( function(){ 
claculate();
});
});


function claculate()
{

 //*********************** its for calculation col 1 ******************
var calcul = [40.00,92.00,27.00,151.00,296.00,51.00,199.00,220.00];

var B16=0;

for (var i=0; i<calcul.length; i++)
{ 
  B16=B16+calcul[i];
}
B16=B16+79.00;
B16=1066.94;// verify this with PD 
 
 //********************* end  for calculation col 1 ********************

//********************** its for my col 2 calculation *****************


var stub1 = parseFloat($('#stub1').val())||0; // update this with your slider variable 
var stub2 = parseFloat($('#stub2').val())||0;
var stub3 = parseFloat($('#stub3').val())||0;
var stub4 = parseFloat($('#stub4').val())||0;
var stub5 = parseFloat($('#stub5').val())||0;
var stub6 = parseFloat($('#stub6').val())||0;
var stub7 = parseFloat($('#stub7').val())||0;
var stub8 = parseFloat($('#stub8').val())||0;

var mystubdata =[stub1,stub2,stub3,stub4,stub5,stub6,stub7,stub8];

var C15=0; 

for (var i=0; i<calcul.length; i++)
{ 
  var stubdata= calcul[i]*(1+(mystubdata[i]/100));   //  B4*(1+stub) for this callculation
  //alert(stubdata);
  C15=C15+stubdata;
}

C15=C15+79;
//alert("C15 "+C15);
var B17= 2000;
var data1=100*((B16-C15)/B17);
// alert(data1);

var data = parseFloat(data1).toFixed(2) || 0;
 
//********************** its for my col 2 calculation  **************************** 



$('#datatable').find("td").eq(0).text(data);

//$(function () {
    $('#container').highcharts({
        data: {
            table: document.getElementById('datatable')
        },
        chart: {
            type: 'column'
        },
        title: {
            text: '<b>Excédent budgétaire</b>'
        },
        yAxis: {
            allowDecimals: false,
            title: {
                text: '%'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.point.y + ' ' + this.point.name.toLowerCase();
            }
        }
    });
//});
}