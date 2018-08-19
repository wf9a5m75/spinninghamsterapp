

var build_version = "1.1.0";

var timer;

var ajax_url= app_config.ApiUrl ;
var dialog_title_default= app_config.DialogDefaultTitle;
var search_address;
var ajax_request;
var cart=[];
var networkState;

var easy_category_list='';
var map;
var map_search;
var drag_marker;
var map_track;
var track_order_interval;
var track_order_map_interval;
var drag_marker_bounce=1;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() { 

	// Show internet connection error after 10 seconds
	setTimeout(function() {
	    $(".retry-language").show();
	}, 100);
		
	    					
	navigator.splashscreen.hide();
	
	if(!isDebug()){
 	   getLanguageSettings();
	}
	
	

	
}

document.addEventListener("offline", noNetConnection, false);

function noNetConnection()
{
	toastMsg( getTrans("No Internet Connection",'connection_lost') );
	$(".retry-language").show();
}


jQuery.fn.exists = function(){return this.length>0;}

function dump(data)
{
	console.debug(data);
}

function setStorage(key,value)
{
	localStorage.setItem(key,value);
}

function getStorage(key)
{
	return localStorage.getItem(key);
}

function removeStorage(key)
{
	localStorage.removeItem(key);
}

function explode(sep,string)
{
	var res=string.split(sep);
	return res;
}

function urlencode(data)
{
	return encodeURIComponent(data);
}

$( document ).on( "keypress", ".numeric_only", function(e) {
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
             return false;
  }
});	 



ons.bootstrap();  
ons.ready(function() {
		
		
	
	
}); /*end ready*/

function refreshConnection()
{	
	if ( !hasConnection() ){
		$(".home-page").hide();
		$(".no-connection").show();		
	} else {
		$(".home-page").show();
		$(".no-connection").hide();
	}	
}

function hasConnection()
{
	if(isDebug()){
		return true;
	}
	//networkState = navigator.network.connection.type;		
	var networkState = navigator.connection.type;	
	if ( networkState=="Connection.NONE" || networkState=="none"){	
		return false;
	}	
	return true;
}




document.addEventListener("pageinit", function(e) {
	
		
	switch (e.target.id)
	{		
		
		case "page-getsettings":
		  break;
				
		case "page-home":	
		break;
		
		default:
		  break;
	}
    
}, false);


/*mycallajax*/
function callAjax(action,params)
{
	
	if ( !hasConnection() ){		
		switch (action)
		{
			case "registerMobile":			
			break;
			
			case "getLanguageSettings":
			  $(".retry-language").show();
			break;
			
			default:
			toastMsg(  getTrans("No Internet Connection",'connection_lost') );
			break;
			
		}
		return;
	}

	
	/*add language use parameters*/
	if (isDebug()){
		//
	} else {
		params+="&platform="+ device.platform;
	}
	params+="&app_version="+ getStorage("build_version");
	params+="&lang_id="+getStorage("default_lang");
	params+="&lang="+getStorage("default_lang");
	if(!empty(app_config.APIHasKey)){
		params+="&api_key="+app_config.APIHasKey;
	}
	
	if (!empty(getStorage("client_id"))){
		
		if (getStorage("client_id") !== undefined){
			
			params+="&client_id="+getStorage("client_id");
			
		}
		
	}

	
    ajax_request = $.ajax({
		url: ajax_url+"/"+action, 
		data: params,
		type: 'post',                  
		async: false,
		dataType: 'jsonp',
		timeout: 10000,
		crossDomain: true,
	 beforeSend: function() {
		if(ajax_request != null) {			 	
		   /*abort ajax*/
		   hideAllModal();	
           ajax_request.abort();
		} else {    
			/*show modal*/			   
			switch(action)
			{
				case "registerMobile":
				   break;
				case "search":
				   loader.show();
				   
				   if(timer){
				    	    clearTimeout(timer);
				    	    timer = null;
				    }
				   
				   	timer = setTimeout(function() {
				       loader.hide();
				   }, getStorage("gps_sett_max_wait"));
				   translatePage();
				   break;
			    case "getLanguageSettings":			    
			    break;
			    case "getLastAddress":			    
			    break;
				default:
				   loader.show();
				   
				   if(timer){
				    	    clearTimeout(timer);
				    	    timer = null;
				    }
				   
				   	timer = setTimeout(function() {
				       loader.hide();
				   }, getStorage("gps_sett_max_wait"));
				   break;
			}
		}
	},
	complete: function(data) {					
		ajax_request=null; 
		
	},
	success: function (data) {	 
	 
	
		if (data.code==1){
			switch (action)
			{
			    
				default:
			      hideAllModal();
			      
				  onsenAlert(data.msg);	
				  break;				
			}
			
			/* end ok conditions*/
		} else {


			switch(action)
			{					
											
							    
				default:
				  onsenAlert(data.msg);	
				  hideAllModal();

				  break;
			}			
		}
				
	},
	error: function (request,error) {	        
		hideAllModal();		

		if (action=="registerMobile" || action=="getLastAddress"){
		} else {			
			toastMsg( getTrans("Oops, something went wrong. Try again!",'network_error') );		
		}	
	}
   });       	
}

function setHome()
{

	var options = {     	  		  
	  	  closeMenu:true,
	      animation: 'slide',
	      callback:setHomeCallback
	   };	   	   	   
	 menu.setMainPage('home.html',options);
}

function setHomeLang(lang)
{

	var options = {     	  		  
	  	  closeMenu:true,
	      animation: 'slide',
	      callback:setHomeCallback
	   };	   	   	   
	 menu.setMainPage('home.html',options);
	 setLanguage(lang);
}

function setHomeFilter()
{

	var options = {     	  		  
	  	  closeMenu:true,
	      animation: 'slide',
	      callback:setHomeCallback
	   };	   	   	   
	 menu.setMainPage('filterBase.html',options);
}

function setHomeCallback()
{	
	refreshConnection();
}


function initSlideMenu()
{	
   menu.on('preopen', function() {
       
       
       translatePage();    
          
  });  
  menu.on('postopen', function() {
   
      imageLoaded('.img_loaded');
  });	
}

function InitPlaceOrder()
{
	
	    	placeOrder();
	        return false;
 
}