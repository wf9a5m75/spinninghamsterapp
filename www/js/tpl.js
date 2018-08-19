function privatePriceRowWithRadioHidden(radio_name,radio_value,label,price,ischecked)
{
	var htm='';

	     htm+='<input type="hidden" name="'+radio_name+'" value="'+radio_value+'">';

    return htm;
}

function privatePriceRowWithRadio(radio_name,radio_value,label,price,ischecked)
{
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon" class="">';
    htm+='<ons-row class="row">';
     htm+='<ons-col class="concat-text" width="75%">';
       htm+='<label class="radio-button checkbox--list-item radio-button--material">';
	     htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'" '+ischecked+' >';
	     htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
	     htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
	   htm+='</label>';
	  htm+='</ons-col>';	
	  console.log(price);
	  if (price != "0"){
	  				htm+='<ons-col class="text-right" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  } else {
	  				htm+='<ons-col class="text-right" ></ons-col>';
	  }
	  
	  
    htm+='</ons-row>';
    htm+='</ons-list-item>';
    return htm;
}

function privatePriceRowWithRadio2(radio_name,radio_value,label,price,ischecked)
{
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon" class="">';
    htm+='<ons-row class="row">';
     htm+='<ons-col class="concat-text" width="50%">';
       htm+='<label class="radio-button checkbox--list-item radio-button--material">';
	     htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'" '+ischecked+' >';
	     htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
	     htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
	   htm+='</label>';
	  htm+='</ons-col>';	
	  
	  if (price != "0"){
	  				htm+='<ons-col class="text-right" >&#3647; '+price+'</ons-col>';
	  } else {
	  				htm+='<ons-col class="text-right" ></ons-col>';
	  }
	  
	  
    htm+='</ons-row>';
    htm+='</ons-list-item>';
    return htm;
}

function subItemRowWithRadio(subcat_id,radio_name,radio_value,label,price,ischecked , description)
{
	
	var show_addon_description=getStorage("show_addon_description");	
	
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon" class="">';
    htm+='<ons-row class="row">';
    
     if(show_addon_description==1){
        htm+='<ons-col class="concat-text" width="10%">';
     } else {
     	htm+='<ons-col class="concat-text" width="75%">';
     }
     
       htm+='<label class="radio-button checkbox--list-item radio-button--material">';
	     htm+='<input type="radio" name="'+radio_name+subcat_id+'" class="'+radio_name+' sub_item_name_'+subcat_id+' radio-button__input radio-button--material__input" value="'+radio_value+'" '+ischecked+' data-id="'+subcat_id+'"  >';
	     htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
	     
	     if(show_addon_description!=1){
	     htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
	     }
	     
	   htm+='</label>';
	  htm+='</ons-col>';	
	  
	  if(show_addon_description==1){
	     htm+='<ons-col class="small-font-dim" width="30%" style="margin-top:10px;" >'+label+'</ons-col>';
	  }
	  
	  if(empty(description)){
	  	description='';
	  }
	  
	  if(show_addon_description==1){
	  htm+='<ons-col class="small-font-dim" width="40%" style="margin-top:10px;padding-left:5px;" >'+description+'</ons-col>';
	  }	  
	  
	  if(show_addon_description==1){
	  console.log(price);
	  		if (price != "0"){
	  		htm+='<ons-col class="text-right" width="20%" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  		} else {
	  		htm+='<ons-col class="text-right" width="20%" ></ons-col>';
	  		}
	  		
	  } else {
	  console.log(price);
	  		if (price != "0"){
	  			htm+='<ons-col class="text-right" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  		} else {
	  			htm+='<ons-col class="text-right" ></ons-col>';
	  		}

	  }
    htm+='</ons-row>';
    htm+='</ons-list-item>';
    return htm;
}

function subItemRowWithCheckbox(subcat_id, radio_name, radio_value, label, price, multi_option_val, description )
{
	
	var show_addon_description=getStorage("show_addon_description");	
		
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon">';
    htm+='<ons-row class="row">';
    
     if(show_addon_description==1){
        htm+='<ons-col class="concat-text" width="10%">';
     } else {
     	htm+='<ons-col class="concat-text" width="75%">';
     }
          
       htm+='<label class="checkbox checkbox--list-item">';
	     htm+='<input type="checkbox" name="'+radio_name+'" class="sub_item_custom '+radio_name+' sub_item_name_'+subcat_id+' " value="'+radio_value+'" data-id="'+subcat_id+'" data-multi="'+multi_option_val+'"  >';
	     htm+='<div class="checkbox__checkmark checkbox--list-item__checkmark"></div>';
	     
	     if(show_addon_description!=1){
	       htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
	     }
	     
	   htm+='</label>';
	  htm+='</ons-col>';	
	  	  
	  if(show_addon_description==1){
	     htm+='<ons-col class="small-font-dim" width="30%" style="margin-top:10px;" >'+label+'</ons-col>';
	  }
	  
	  if(empty(description)){
	  	description='';
	  }
	  
	  if(show_addon_description==1){
	     htm+='<ons-col class="small-font-dim" width="40%" style="margin-top:10px;padding-left:5px;" >'+description+'</ons-col>';
	  }
	  
	  if(show_addon_description==1){
	  console.log(price);
	  	if (price != "0"){
	  			htm+='<ons-col class="text-right" width="20%" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  	} else {
	  			htm+='<ons-col class="text-right" width="20%" ></ons-col>';
	  	}
	  
	    
	  } else {
	    console.log(price);
	  	if (price != "0"){
	  				htm+='<ons-col class="text-right" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  	} else {
	  				htm+='<ons-col class="text-right" ></ons-col>';
	  	}
	  
	  	
	  }
	  
    htm+='</ons-row>';
    htm+='</ons-list-item>';
    return htm;
}

function subItemRowWithCheckboxQty(subcat_id,radio_name,radio_value,label,price,uniqid)
{
			
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon">';
    htm+='<ons-row class="row">';
     htm+='<ons-col class="concat-text" width="50%">';
       htm+='<label class="checkbox checkbox--list-item">';
	     htm+='<input type="checkbox" name="'+radio_name+'" class="'+uniqid+' subqty_'+subcat_id+' '+radio_name+' sub_item_name_'+subcat_id+'" value="'+radio_value+'" data-id="'+subcat_id+'" data-withqty="2" >';
	     htm+='<div class="checkbox__checkmark checkbox--list-item__checkmark checkmark__hidden"></div>';
	     htm+='<div class="description item-name concat-text checkbox_size text_'+uniqid+'">'+label+'</div>';
	   htm+='</label>';
	  htm+='</ons-col>';	
	  
	  htm+='<ons-col class="concat-text concat-text-initial" width="30%">';
	  
      htm+='<div class="qty_left"><button class="button button--quiet button-qty" onclick="addonQty(1,'+uniqid+')"><span class="fal fa-minus-circle"></span></button></div>';
      htm+='<div class="qty_center_addon"><input name="subitem-qty" type="hidden" class="text-center numeric_only small-input text-center text-input text-input--underbar subitem-qty subqty_'+uniqid+'_hidden" placeholder="qty" value="0"><span class="subitem-qty subqty_'+uniqid+'_display count_'+uniqid+'">0</span></div>';
      htm+='<div class="qty_right"><button class="button button--quiet button-qty" onclick="addonQty(2,'+uniqid+')"><span class="fal fa-plus-circle"></span></button></div>';

	  htm+='</ons-col>';	
	  
	  console.log(price);
	  if (price != "0"){
	  				htm+='<ons-col class="text-right" ><div class="right_price">&#3647; '+price+'</div></ons-col>';
	  } else {
	  				htm+='<ons-col class="text-right" ></ons-col>';
	  }

    htm+='</ons-row>';
    htm+='</ons-list-item>';
    return htm;
}

function privateRowWithRadio(radio_name,radio_value,label)
{
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon" class="">';
       htm+='<label class="radio-button checkbox--list-item radio-button--material">';
	     htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'" >';
	     htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
	     htm+='<p class="description item-name"> '+label+'</p>';
	   htm+='</label>';
	htm+='</ons-list-item>';
	return htm;
}

function privateRowWithCheckbox(radio_name,class_name,radio_value,label)
{
	var htm='';
	htm+='<ons-list-item modifier="tappableaddon">';
       htm+='<label class="checkbox checkbox--list-item">';
	     htm+='<input type="checkbox" name="'+radio_name+'" class="'+class_name+'" value="'+radio_value+'" >';
	     htm+='<div class="checkbox__checkmark checkbox--list-item__checkmark"></div>';
	     htm+='<p class="description item-name"> '+label+'</p>';
	   htm+='</label>';
	htm+='</ons-list-item>';
	return htm;
}

function cartFooter(currency_code)
{
  var htm='';  

   htm+='<ons-list-header class="list-header trn">'+getTrans("Quantity",'quantity')+'</ons-list-header>';
   
   htm+='<div class="add_cart_qty quantity_container">';
   
   htm+='<div class="qty_container" style="">';
   htm+='<div class="qty_left"><button class="button button--quiet button-qty" onclick="addCartQty(1)"><span class="fal fa-minus-circle" style="color:#818181;"></span></button></div>';
   htm+='<div class="qty_center"><div class="qty_display" style="color: #333333;font-size: 14px;font-weight: 700;background-color: #FFFFFF;border-radius: 50px;/* padding-left: 10px; *//* padding-right: 10px; */paddi;padding: 0px 0px;width: 25px;height: 25px;"><span class="qty_display_inside" style="position:relative;top:-9px;">1</span></div></div>';
   htm+='<div class="qty_right"><button class="button button--quiet button-qty" onclick="addCartQty(2)"><span class="fal fa-plus-circle" style="color:#818181;"></span></button></div>';
   htm+='<input name="qty" type="hidden" class="qty" value="1"></div></div>';
   
            
//    htm+='<div class="wrapper cart-total-wrap">';
//    htm+='<ons-row class="row">';
//      htm+='<ons-col class="total text-center trn" width="50%" data-trn-key="total">Total</ons-col>';
//      htm+='<ons-col class="total_value text-right" width="50%">'+ currency_code+'</ons-col>';
//    htm+='</ons-row>';
//    htm+='</div>';	
    return htm
}

function tplCartRowNoBorder(item_id, item_name, price, pretty_price, qty, field_name,size,x ,price2, discount)
{	
   var htm='';
//   htm+='<ons-list-item class="row-no-border">';
//   htm+='<ons-row >';
//	   htm+='<ons-col class="concat-text" width="75%">';
//		 htm+='<input name="qty" type="number" class="item-qty qty numeric_only small-input text-center text-input text-input--underbar" ';
//		  htm+='placeholder="qty" value="'+qty+'" data-rowid="'+x+'">';
//		  
		  htm+='<input type="hidden" name="'+field_name+'" class="'
		  +field_name + ' price'+x + ' " value="'+price+'" >';		  
		  
		  htm+='<input type="hidden" name="item_id" class="item_id'+x+' " value="'+ item_id +'" >';
		  htm+='<input type="hidden" name="discount" class="discount'+x+' " value="'+ discount +'" >';
//
//		  if (discount>0){
//		  	  //price2='<price class="discount">'+ (parseFloat(price2)+parseFloat(discount)) +'</price> '+price2;
//		  }
//		  
//		  /*alert(price2);
//		  alert(size);*/
//		  
//		  if (empty(size))	{
//		     htm+='<div class="description item-name concat-text checkbox_size bold"><span class="qty-label">'+qty+"x</span> "+prettyPrice(price2)+' '+item_name+'</div>';
//		  } else {
//		  	htm+='<div class="description item-name concat-text checkbox_size bold"><span class="qty-label">'+qty+"x</span> "+prettyPrice(price2)+" "+item_name+
//		  	"<br><size>("+size+")</size>"
//		  	+'</div>';
//		  }
//	   htm+='</ons-col>';
	   console.log(price);
//	   if (pretty_price != "฿ 0"){
//	   				htm+='<ons-col class="text-right" ><price>'+pretty_price+'</price></ons-col>';
//	   } else {
//	   				htm+='<ons-col class="text-right" ></ons-col>';
//	   }
	   
	   
//   htm+='</ons-row>';
//   
//   htm+='<ons-row class="row-del-wrap" >';
//   htm+='<ons-col class="text-right" width="100%">';
//   htm+='<ons-button modifier="quiet" class="delete-item" data-id="'+x+'"><ons-icon icon="fa-times"></ons-icon></ons-button>';
//   htm+='</ons-col>';
//   htm+='</ons-row>';
//   
//   htm+='</ons-list-item>';
   return htm;
}

function tplCartRowNoBorderSub(subcat_id, sub_item_id, item_name, price, pretty_price, qty, qty2,x )
{
   var htm='';
   htm+='<div class="row-no-border subitem-row'+x+' ">';
   //htm+='<ons-row >';
      htm+='<ons-col width="3%"></ons-col>';
	   htm+='<ons-col class="concat-text" width="75%">';
		 htm+='<input name="qty" type="number" class="subitem-qty'+x+' qty small-input text-center text-input text-input--underbar" ';
		  htm+='placeholder="qty" value="'+qty+'" data-qty="'+qty2+'" >';
		  		  
		  htm+='<input type="hidden" name="subcat_id" class="subcat_id" value="'+subcat_id+'">';
		  htm+='<input type="hidden" name="sub_item_id" class="sub_item_id" value="'+sub_item_id+'">';
		  htm+='<input type="hidden" name="sub_item_price" class="sub_item_price" value="'+price+'">';
		  htm+='<input type="hidden" name="sub_item_name" class="sub_item_name" value="'+item_name+'">';
		  
	//	  htm+='<div class="description item-name concat-text checkbox_size"><span class="qty-label">'+qty+"x</span> "+prettyPrice(price)+" "+item_name+'</div>';
	   //htm+='</ons-col>';
	   console.log(price);
	   if (pretty_price != "0"){
	   //				htm+='<ons-col class="text-right" ><price>'+pretty_price+'</price></ons-col>';
	   } else {
	   //				htm+='<ons-col class="text-right" ></ons-col>';
	   }
	   
	   
   htm+='</div>';
   //htm+='</ons-list-item>';
   return htm;
}

function tplCartRow(label,price,class_name)
{
	var htm='';	
	htm+='<ons-list-item class="'+class_name+'">';
	  htm+='<ons-row >';
		   htm+='<ons-col class="concat-text" width="70%">';
			  htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
		   htm+='</ons-col>';
		   console.log(price);
		   if (price != "0"){
		   				htm+='<ons-col class="text-right" ><price>&#3647; '+price+'</price></ons-col>';
		   } else {
		   				htm+='<ons-col class="text-right" ></ons-col>';
		   }
		   
		   
	   htm+='</ons-row>';
	htm+='</ons-list-item>';
	return htm;
}

function tplCartRowHiddenFields(label, value, field_name, x, class_name)
{
	var htm='';	
	htm+='<ons-list-item class="'+class_name+' subitem-row'+x+' " >';
	  htm+='<ons-row >';
		   htm+='<ons-col class="concat-text" >';
		      htm+='<input type="hidden" name="'+field_name+x+'"  class="'+field_name+x+'" value="'+value+'" >';
			  htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
		   htm+='</ons-col>';		   
	   htm+='</ons-row>';
	htm+='</ons-list-item>';
	return htm;	
}

function initMobileScroller()
{	
//	if ( $('.delivery_date').exists()){
//		$('.delivery_date').mobiscroll().date({
//			theme: 'android-holo-light', 
//			mode: "scroller",
//			display: "modal",
//			dateFormat : "yy-mm-dd"
//		});
//	}
	
//	if ( $('.delivery_time').exists()){		
//		$('.delivery_time').mobiscroll().time({
//			theme: 'android-holo-light', 
//			mode: "scroller",
//			display: "modal",
//			dateFormat : "yy-mm-dd",
//			/*timeFormat:"HH:ii",
//			timeWheels:"HHii"*/
//		});
//	}
		
	if ( $('.date_booking').exists()){
		$('.date_booking').mobiscroll().date({
			theme: 'android-holo-light', 
			mode: "scroller",
			display: "modal",
			dateFormat : "yy-mm-dd"
		});
	}
	
	if ( $('.booking_time').exists()){
		$('.booking_time').mobiscroll().time({
			theme: 'android-holo-light', 
			mode: "scroller",
			display: "modal",
			dateFormat : "yy-mm-dd"
		});
	}
}

function tplPaymentList(radio_name, radio_value, label, icons, selected)
{
	var htm='';	
	 htm+='<ons-list-item modifier="tappableaddon" class="">';
       htm+='<ons-row class="row">';
          htm+='<ons-col class="concat-text" width="75%">';
             htm+='<label class="radio-button checkbox--list-item radio-button--material">';
               
               if (selected == 1){
               
               htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'" checked="checked">';
               
               } else {
               
               htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'">';
               
               }
               
               htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
               htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
             htm+='</label>';
          htm+='</ons-col>';
          htm+='<ons-col class="text-right '+radio_value+'" >';
            htm+='<img src="'+icons+'" class="payment-icon">';
          htm+='</ons-col>';
       htm+='</ons-row>';
     htm+='</ons-list-item>';
     return htm;
}

function tplPaymentListStatic(radio_value, label, icons)
{
	var htm='';	
	 htm+='<ons-list-item modifier="tappable">';
       htm+='<ons-row class="row">';
          htm+='<ons-col class="concat-text" width="75%">';          
               htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';             
          htm+='</ons-col>';
          htm+='<ons-col class="text-right '+radio_value+'" >';
            htm+='<ons-icon icon="'+icons+'"></ons-icon>';
          htm+='</ons-col>';
       htm+='</ons-row>';
     htm+='</ons-list-item>';
     return htm;
}

function tplPaymentProvider(radio_name, radio_value, label, icons)
{
	var htm='';	
	 htm+='<ons-list-item modifier="tappable" class="">';
       htm+='<ons-row class="row">';
          htm+='<ons-col class="concat-text" width="75%">';
             htm+='<label class="radio-button checkbox--list-item radio-button--material">';
               htm+='<input type="radio" name="'+radio_name+'" class="'+radio_name+' radio-button__input radio-button--material__input" value="'+radio_value+'">';
               htm+='<div class="radio-button__checkmark checkbox--list-item__checkmark radio-button--material__checkmark"></div>';
               htm+='<div class="description item-name concat-text checkbox_size">'+label+'</div>';
             htm+='</label>';
          htm+='</ons-col>';
          htm+='<ons-col class="text-right" >';
            htm+='<div class="logo-wrap">';
            htm+='<img src="'+icons+'" alt="" title="" />';
            htm+='</div>';
          htm+='</ons-col>';
       htm+='</ons-row>';
     htm+='</ons-list-item>';
     return htm;
}

function tplReviews(rating, client_name, review, date_review)
{
   var htm='';
   htm+='<ons-list class="review-list">';
	  htm+='<ons-list-item modifier="tappable" class="list-item-container">';
	     htm+='<ons-row class="row"> ';
		     htm+='<ons-col class="col-image" width="90px">';
			   htm+='<ons-icon icon="fa-user" class="icon-user"></ons-icon>';
			 htm+='</ons-col>';
			 
			 htm+='<ons-col class="col-description">';
			   htm+='<div class="rating-stars" data-score="'+rating+'"></div>';
			   htm+='<p class="restauran-title concat-text">'+client_name+'</p>';
			   htm+='<p class="small-font-dim small-font-dim-smaller">'+date_review+'</p> ';
			   htm+='<p class="small-font-dim">'+review+'</p>';
			 htm+='</ons-col>';
			 
		 htm+='</ons-row>';
	  htm+='</ons-list-item>';
	htm+='</ons-list>';
	return htm;
}

function customFields(name, placeholder)
{
	var htm='';	
	htm+='<div class="field-wrapper">';
	  htm+='<input type="text" name="'+name+'"  class="text-input text-input--underbar" placeholder="'+placeholder+'" value="" has_validation data-validation="required" data-validation-error-msg="this field is mandatory!" >';
	htm+='</div>';
	return htm;
}

function DineinFields()
{
	var htm='';	
	htm+='<div class="wrapper">';
       htm+='<ons-row class="row">';
           htm+='<ons-col class="text-big trn">'+ getTrans("Dine in information",'dine_in_information') +'</ons-col>';
       htm+='</ons-row>';
   htm+='</div>';
   
    htm+='<div class="field-wrapper">';
      htm+='<input type="text" name="dinein_number_of_guest"  class="numeric_only2 dinein_number_of_guest text-input text-input--underbar has_validation" placeholder="'+  getTrans("Number of guest",'number_of_guest') + '" data-validation="required" data-validation-error-msg="this field is mandatory!"   >';
   htm+='</div>';
   
   htm+='<div class="field-wrapper">';
      htm+='<input type="text" name="dinein_special_instruction"  class="dinein_special_instruction text-input text-input--underbar has_validation" placeholder="'+ getTrans("Special Instructions",'special_instruction') + '" >';
   htm+='</div> ';
   
	return htm;
}

function ContactNumberFields()
{
	var htm='';	
	htm+='<div class="wrapper">';
       htm+='<ons-row class="row">';
           htm+='<ons-col class="text-big trn">'+ getTrans("Contact information",'contact_information') +'</ons-col>';
       htm+='</ons-row>';
   htm+='</div>';
   
    htm+='<div class="field-wrapper">';
      htm+='<input type="text" name="contact_phone"  class="mobile_inputs contact_phone text-input text-input--underbar has_validation" placeholder="'+  getTrans("Contact phone",'contact_phone') + '" value="" data-validation="required" data-validation-error-msg="this field is mandatory!"   >';
   htm+='</div>';
      
	return htm;
}