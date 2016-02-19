//TransferGFX Command by CMQ
//LastModified: Nov 04, 2015.


function init() {
	var FLA_1 		= fl.getDocumentDOM(); 	
	var FLA1_index 	= fl.findDocumentIndex(FLA_1.name);
	
	var FLA2_index 	= getIndex(FLA1_index);
	var FLA_2 		= fl.documents[FLA2_index];
	
	if (FLA_2) {
		transferGFX(FLA_1, FLA_2);
		gotoFLA(FLA1_index);		
	} else {
		alert ("Open FLA to transfer GFX to.\n\nThen try again.")		
	}

}

function transferGFX(fla1, fla2){
	copyGfxIn(fla1);
	pasteGfxIn(fla2);
}

function copyGfxIn(fla) {
	var tl = fla.getTimeline(); 	
	tl.selectAllFrames();
	tl.copyFrames();
}

var SymbolNameCreated;
function pasteGfxIn(fla) {
	var symbolName = "_GFXscene_";

	var lib = fla.library; 
	var gfxNum = getSymbolNum(lib, symbolName);
	
	SymbolNameCreated = symbolName + gfxNum;

	lib.addNewItem('graphic', SymbolNameCreated, 'top left');	//check position later
	lib.editItem('');
	
	var tl = fla.getTimeline();	
	tl.selectAllFrames();
	tl.pasteFrames();
}

function gotoFLA(index){
	fl.setActiveWindow(fl.documents[index]);
	alert("GFX Copied\n\n[ " + SymbolNameCreated + " ]");
}


function getSymbolNum(lib_par, gfxName) {
	var i = 1;
	while (lib_par.itemExists(gfxName + i)) {
		i++;
	}
	
	return i;
}

function getIndex(index){
	if (index == 0){
		return 1;
	} else if (index == 1) {
		return 0;
	}
}

init();
